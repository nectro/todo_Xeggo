import React from 'react'
import classes from "./Task.module.css"

function TaskComponent() {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.contentHeader}>
                <h3>Todo List</h3>
                <button className={classes.logoutButton}>Logout</button>
            </div>
            <form className={classes.content}>
                <input className={classes.input} placeholder="Type your task..." />
                <button className={classes.button}>Add Task</button>
            </form>
            <div className={classes.content}>
                <div className={classes.tasks}>
                    <span>
                        The task
                    </span>
                    <span>
                        <button className={classes.markButton}>Add Task</button>
                        <button className={classes.deleteButton}>Add Task</button>
                    </span>
                </div>

                <div className={classes.tasks}>
                    <span>
                        The task
                    </span>
                    <span>
                        <button className={classes.markButton}>Add Task</button>
                        <button className={classes.deleteButton}>Add Task</button>
                    </span>
                </div>

                <div className={classes.tasks}>
                    <span>
                        The task
                    </span>
                    <span>
                        <button className={classes.markButton}>Add Task</button>
                        <button className={classes.deleteButton}>Add Task</button>
                    </span>
                </div>
            </div>
            
        </div>
    )
}

export default TaskComponent
