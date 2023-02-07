
import { projectList } from "../../data";
import { useEffect, useState } from "../../libs";

const AdminProjectsPage = () => {
    const [projects, setProjects] = useState(projectList)
    // hàm useEffect sẽ được gọi sau khi return xong
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove'); // [btn,btn,btn]
        for(let btn of btns){
            // viết sự kiện cho button
            btn.addEventListener('click', function(){
                // lay data-id từ button,
                const id = btn.dataset.id;
                // lọc ra 1 mảng mới không bao gồm id đã click vào
                const newProjects = projects.filter(project => project.id != id)
                // thiết lập lại mảng projects ban đầu
                setProjects(newProjects)
            })
        }
    })
    return `
    <table class="table table-bordered">
    <thead>
        <tr>
            <th>#</th>
            <th>Ten du an</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        ${projects.map((project, index) => `
            <tr>
                <td>${index + 1}</td>
                <td>${project.name}</td>
                <td>
                    <button data-name="dat" data-id="${project.id}" class="btn btn-remove btn-danger">Remove</button>
                </td>
            </tr>
        `).join("")}
        
    </tbody>
</table>
    `
};


export default AdminProjectsPage;