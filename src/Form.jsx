import React, { useState, useEffect } from "react";
import Alert from "./Alert";

// Define the Table component outside of the Form component
const Table = ({ tasks }) => {
    return (
        <div className="container table-container mt-4" style={{ marginTop: "70px" }}>
            <h2 style={{ fontSize: "23px", marginBottom: "20px" }}>To-do list</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Priority</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <th scope="row">{task.id}</th>
                            <td>{task.title}</td>
                            <td>{task.description}</td>
                            <td>{task.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

function Form() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        priority: "",
    });
    const [showAlert, setShowAlert] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Retrieve tasks from localStorage when the component mounts
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []); // Empty dependency array ensures this effect runs only once, when the component mounts

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form added:", formData);
        add();
        setShowAlert(true); // Show the alert after submitting the form
    };

    function add() {
        console.log("Successfully added");
        const newId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1;
        const newTask = { ...formData, id: newId };
        setTasks([...tasks, newTask]);
        localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
        console.log(tasks);
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    {showAlert && <Alert message="Form submitted successfully!" color="primary" />}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group mt-4">
                            <h4>Task Management Tool</h4>
                        </div>
                        <div className="form-group mt-4">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea
                                className="form-control"
                                id="description"
                                rows="3"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="priority">Priority</label>
                            <select
                                className="form-control"
                                id="priority"
                                name="priority"
                                value={formData.priority}
                                onChange={handleChange}
                            >
                                <option disabled value="">
                                    Choose one
                                </option>
                                <option>High Priority</option>
                                <option>Medium Priority</option>
                                <option>Low Priority</option>
                                <option>No Priority</option>
                            </select>
                        </div>
                        <div className="mt-4 mb-5 float-left">
                            <button type="submit" className="btn btn-primary">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                <Table tasks={tasks} formData={formData} />
                </div>
            </div>
        </div>
    );
}

export default Form;
