import React from 'react';
import Header from '../common/Header'
import TaskCard from '../common/TaskCard'

export default function Home() {
  return (
    <>
    <Header/>
    <div className='max-w-screen-xl mx-auto grid grid-cols-3'>
    <TaskCard linkUrl='ContactApp' title="Contact-App" body="Manage every contact"  />
    <TaskCard linkUrl='TodoApp' title="Todo-Task-App" body="Manage every task"  />
    <TaskCard linkUrl='JSTasks' title="JS-Tasks" body="Manage every task of javascript"  />
    </div>
    </>
  )
}