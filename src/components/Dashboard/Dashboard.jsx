function Dashboard({ tasks }) {

const totalTasks = tasks.length;

const completedTasks = tasks.filter(
  (task) => task.completed
).length;

const pendingTasks = totalTasks - completedTasks;

  return (
    <section id="dashboard" className="dashboard">
      <div className="section-header">
        <h2>Dashboard</h2>
        <p>Here's your productivity overview.</p>
      </div>
      
  

      <div className="stats">
        <div className="stat-card">
          <div>
            <h3>{totalTasks}</h3>
            <p>Total Tasks</p>
          </div>
        </div>

        <div className="stat-card">
          <div>
           <h3>{completedTasks}</h3>
            <p>Completed</p>
          </div>
        </div>

        <div className="stat-card">
          <div>
          <h3>{pendingTasks}</h3>
            <p>Pending</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;