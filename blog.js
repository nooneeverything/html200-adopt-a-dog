// headline ADTOPADOG BLOG

const title = document.createElement('h2');

title.textContent = 'Adoption Blog';
title.classList.add("title");

const first = document.getElementById('first');

document.body.insertBefore(title, first);

// Blog

const blogposts = [
  {
    title: "Teach Your Dog To Fetch!",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mauris enim. Ut vitae lacus eu ante consequat porta ac ac augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nec est enim. Cras dapibus condimentum metus quis volutpat. Nulla malesuada nunc ex, vitae tempus purus feugiat quis. Morbi aliquam est nec dui egestas aliquam. Vestibulum sit amet magna vitae erat malesuada malesuada et non dolor. Donec vel magna vitae ipsum consectetur vehicula ut eu elit. Maecenas quis turpis ac leo dapibus convallis. Sed sodales congue ex a imperdiet. Phasellus sit amet velit dolor. Sed eu dapibus neque. Proin in blandit purus. Proin dapibus elit a gravida faucibus. Etiam euismod dapibus turpis, nec suscipit enim sodales at. Cras commodo tincidunt semper. Fusce non euismod ex. Morbi vulputate metus at porttitor viverra. Donec vehicula finibus urna. Nullam interdum orci nec consequat cursus. Nullam vel ullamcorper est. Suspendisse et augue ac diam aliquet lobortis. Sed dictum dignissim tellus ac sagittis",
    picture: "/html200-adopt-a-dog/images/blog-1.jpg",
  },
  {
    title: "How To Walk Multiple Dogs",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mauris enim. Ut vitae lacus eu ante consequat porta ac ac augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nec est enim. Cras dapibus condimentum metus quis volutpat. Nulla malesuada nunc ex, vitae tempus purus feugiat quis. Morbi aliquam est nec dui egestas aliquam. Vestibulum sit amet magna vitae erat malesuada malesuada et non dolor. Donec vel magna vitae ipsum consectetur vehicula ut eu elit. Maecenas quis turpis ac leo dapibus convallis. Sed sodales congue ex a imperdiet. Phasellus sit amet velit dolor. Sed eu dapibus neque. Proin in blandit purus. Proin dapibus elit a gravida faucibus. Etiam euismod dapibus turpis, nec suscipit enim sodales at. Cras commodo tincidunt semper. Fusce non euismod ex. Morbi vulputate metus at porttitor viverra. Donec vehicula finibus urna. Nullam interdum orci nec consequat cursus. Nullam vel ullamcorper est. Suspendisse et augue ac diam aliquet lobortis. Sed dictum dignissim tellus ac sagittis",
    picture: "/html200-adopt-a-dog/images/blog-2.jpg",
  },
  {
    title: "Traveling With Your Dog",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et mauris enim. Ut vitae lacus eu ante consequat porta ac ac augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla nec est enim. Cras dapibus condimentum metus quis volutpat. Nulla malesuada nunc ex, vitae tempus purus feugiat quis. Morbi aliquam est nec dui egestas aliquam. Vestibulum sit amet magna vitae erat malesuada malesuada et non dolor. Donec vel magna vitae ipsum consectetur vehicula ut eu elit. Maecenas quis turpis ac leo dapibus convallis. Sed sodales congue ex a imperdiet. Phasellus sit amet velit dolor. Sed eu dapibus neque. Proin in blandit purus. Proin dapibus elit a gravida faucibus. Etiam euismod dapibus turpis, nec suscipit enim sodales at. Cras commodo tincidunt semper. Fusce non euismod ex. Morbi vulputate metus at porttitor viverra. Donec vehicula finibus urna. Nullam interdum orci nec consequat cursus. Nullam vel ullamcorper est. Suspendisse et augue ac diam aliquet lobortis. Sed dictum dignissim tellus ac sagittis",
    picture: "/html200-adopt-a-dog/images/blog-3.jpg",
  },
];


const blogcontainer = document.createElement('div');
blogcontainer.classList.add('blog-container');

for (let i = 0; i < blogposts.length; i += 1) {

const posts = blogposts[i];

const div = document.createElement('div');
div.classList.add('blog');

const figure = document.createElement('figure');
figure.classList.add('pic');//pic1


const pic1 = document.createElement('img');
pic1.src = posts.picture;

const div2 = document.createElement('div');
div2.classList.add('blogtext');//blog1text

const title1 = document.createElement('h3');
title1.textContent = posts.title;

const text1 = document.createElement('p');
text1.textContent = posts.text;


document.body.insertBefore(blogcontainer, first);
blogcontainer.appendChild(div);
div.appendChild(figure);
figure.appendChild(pic1);
pic1.appendChild(div2);
figure.appendChild(div2);
div2.appendChild(title1);
div2.appendChild(text1);


}
