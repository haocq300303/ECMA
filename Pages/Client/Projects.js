import { getCategories } from "../../api/category";
import { getProjectByCategory, getProjects } from "../../api/project";
import ProjectList from "../../components/ProjectList";
import { useState, useEffect } from "../../libs";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [idCate, setIdCate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        setCategories(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    fetchCategories();
  }, []);

  useEffect(() => {
    const select = document.querySelector("#categories");
    select.addEventListener("change", async (e) => {
      const id = e.target.value;
      const res = await getProjectByCategory(id);
      setProjects(res.data.projects);
      setIdCate(id);
    });
  });

  return `
  <div class="py-10 bg-gray-300">
    <h1 class="text-4xl md:text-6xl font-bold py-10 text-center">Projects</h1>
    <div class="w-[1200px] mx-auto h-[50px] mb-10">
      <div class="relative h-full flex items-center">
        <select
          id="categories"
          class="absolute right-0 w-[200px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
        >
          <option selected>Tất cả</option>
          ${categories.map(
            (category) => `
          <option selected="${idCate == category.id ? true : false}" value="${
              category.id
            }">${category.name}</option>
          `
          )}
        </select>
      </div>
    </div>
    <div class="w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    ${ProjectList({ projects })}
    </div>
  </div>
  `;
};

export default Projects;
