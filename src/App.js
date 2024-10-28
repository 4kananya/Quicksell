import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Group from "./components/Group";
import { PriorityLevels, ProgressLevels } from "./constants";
import Footer from "./components/Footer";
import userdata from "./api/quicksellAPI";

function App() {
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);

  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") !== null ? parseInt(localStorage.getItem("grouping")) : 2
  );
  const [ordering, setOrdering] = useState(
    localStorage.getItem("ordering") !== null ? parseInt(localStorage.getItem("ordering")) : 0
  );
  const [byPriority, setByPriority] = useState([]);
  const [byUser, setByUser] = useState([]);
  const [byStatus, setByStatus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await userdata();
        setUsers(res.data.users);
        
        const p = {};
        PriorityLevels.forEach((level) => {
          p[level] = [];
        });
        res.data.tickets.forEach((ticket) => {
          const priority = PriorityLevels[ticket.priority];
          p[priority].push(ticket);
        });
        setByPriority(p);

        const u = res.data.tickets.reduce((acc, ticket) => {
          const userId =
            res.data.users[parseInt(ticket.userId.split("-")[1]) - 1].name;
          acc[userId] = acc[userId] || [];
          acc[userId].push(ticket);
          return acc;
        }, {});
        setByUser(u);

        const s = {};
        ProgressLevels.forEach((level) => {
          s[level] = [];
        });
        res.data.tickets.forEach((ticket) => {
          const status = ticket.status;
          s[status].push(ticket);
        });
        setByStatus(s);

        setGroups(grouping === 0 ? s : grouping === 1 ? u : p);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [grouping]);

  useEffect(() => {
    if (grouping === 0) {
      setGroups(byStatus);
    } else if (grouping === 1) {
      setGroups(byUser);
    } else if (grouping === 2) {
      setGroups(byPriority);
    }
  }, [grouping, byPriority, byUser, byStatus]);

  return (
    <div className="App" style={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}> 
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        ordering={ordering}
        setOrdering={setOrdering}
      />
      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "2rem",
          gap: "2rem",
          overflow: "auto",
          maxHeight: "calc(150vh - 8rem)", 
        }}
      >
        {Object.keys(groups).map((group, id) => (
          <Group
            width={100 / groups.length}
            key={id}
            users={users}
            name={group}
            grouping={grouping}
            ordering={ordering}
            tasks={Object.values(groups)[id]}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
