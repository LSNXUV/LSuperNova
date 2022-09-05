import React, { useState } from 'react'
import { useEffect } from 'react'

import { Link, Outlet, useParams, useLocation, useSearchParams } from 'react-router-dom'
import data from '../../data/blogs/blog.json'
import axios from 'axios';


import './intro.css'

export default function Intro() {

  const [Params, setParams] = useSearchParams()
  const id = Params.get('id')
  const [Blogs, setBlogs] = useState(data)
  
  useEffect(() => {
    axios.get("http://localhost:7070/blogs6").then(
      response =>{
        setBlogs(response.data)
        // console.log(Blogs);
      },
    ).catch(
      error => {
        console.log(error)
        setBlogs(data)
      },
    )
  },[Blogs]
  )

  

  const [NewBlog, setNewBlog] = useState({})


  // function writeJson(params) {

  //   fs.readFile('../../data/blogs/blog.json', function (err, data) {
  //     if (err) {
  //       return console.error(err);
  //     }
  //     var person = data.toString();//将二进制的数据转换为字符串
  //     person = JSON.parse(person);//将字符串转换为json对象
  //     person.data.push(params);//将传来的对象push进数组对象中
  //     person.total = person.data.length;//定义一下总条数，为以后的分页打基础
  //     console.log(person.data);
  //     var str = JSON.stringify(person);//因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
  //     fs.writeFile('../../data/blogs/blog.json', str, function (err) {
  //       if (err) {
  //         console.error(err);
  //       }
  //       console.log('----------新增成功-------------');
  //     })
  //   })
  // }


  const BlogIndex = Blogs.map((blog, index) => {
    return (
      <li key={index}>
        <Link
          to={`?id=${blog.id}`}

        >
          {blog.title}
        </Link>
      </li>
    )
  })

  /* fetch('../../../data/blogs/blog.json').then( (response) => {
    response.json()
  }).then((json) => {
    setBlogs(json)
    console.log(Blogs)
  }) */


  return (

    <div className='intro'>
      <div className="nav">
        <ul type='none'>
          {BlogIndex}
        </ul>
      </div>
      <div className="BlogContent">
        <h1>{Blogs[id ?? 0].title}</h1>
        <h3>{Blogs[id ?? 0].time}</h3>
        <p>{Blogs[id ?? 0].content}</p>
      </div>
    </div>


  )
}
