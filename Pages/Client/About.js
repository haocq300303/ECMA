const About = () => {
  return `
    <h1 class="text-4xl md:text-6xl font-bold text-center my-10">About</h1>
    <div class="w-[1200px] mx-auto flex justify-between gap-8 mb-20" >
      <div class="w-[50%]">
        <img src="https://res.cloudinary.com/dsvfqgd20/image/upload/v1676784340/Social app/avatar_oftj23.jpg" alt="background" class="w-full rounded-2xl" />
      </div>
      <div class="w-[50%] p-4 border-[3px] border-blue-600 rounded-2xl">
        <h3 class="text-3xl font-bold mb-3">Giới thiệu bản thân</h3>
        <p>
        Hiện tại, mình đang là sinh viên kì 4 tại trường FPT Polytechnic. Mình bắt đầu học lập trình từ tháng 10 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc học tập trên trường thì mình thường xuyên học thêm trên F8 Fullstack và trên các kênh Youtube như evondev, easy frontend, ...
        </p>
        <p class="pt-2"> Mình thực sự thích code và thử thách bản thân học được nhiều cái mới vào   mỗi ngày mới. Mục tiêu hiện tại của mình là trở thành một lập trình viên Frontend.
        </p>
        <div class="py-3">
          <h4 class="text-xl font-bold capitalize py-4 border-t border-gray-700">Thông tin cơ bản</h4>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-y-2">
            <li>
              <span class="w-[90px] inline-block">Học vấn<!-- -->:</span
              ><span>FPT Polytechnic</span>
            </li>
            <li>
              <span class="w-[90px] inline-block">Điện thoại<!-- -->:</span
              ><span>0999999999</span>
            </li>
            <li>
              <span class="w-[90px] inline-block">Email<!-- -->:</span
              ><span>hao8386@gmail.com</span>
            </li>
            <li>
              <span class="w-[90px] inline-block">Địa chỉ<!-- -->:</span
              ><span>Yên Phong - Bắc Ninh</span>
            </li>
            <li>
              <span class="w-[90px] inline-block">Website<!-- -->:</span
              ><span></span>
            </li>
            <li>
              <span class="w-[90px] inline-block">Công việc<!-- -->:</span
              ><span>Web developer</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `;
};

export default About;
