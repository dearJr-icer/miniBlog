import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('icer');
    const [isPending, setPending] = useState(false)
    const history = useHistory()

    const handleSublmit = (e) =>{
        e.preventDefault(); //组织刷新
        const blog =  {title, body, author} 
        console.log(blog)
        setPending(true)
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(blog)
        }).then(()=>{
            setPending(false)
            console.log('new blog added')
            history.push('/')
        })
    }

    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSublmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="icer">icer</option>
                    <option value="dearJr">dearJr</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Add Blog</button>}
            </form>
        </div>
     );
}
 
export default Create;