Vue.component('navbar', {
    template: `
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" style="padding: 10px 0; background-color: blue; color: white;">
            <div class="container-fluid">
                <a class="navbar-brand text-light" href="#" style="font-size: 1.2rem;">G-WEB</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon bg-light"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link text-light" style="font-size: 1rem;">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about" class="nav-link text-light" style="font-size: 1rem;">About</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/projects" class="nav-link text-light" style="font-size: 1rem;">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/contact" class="nav-link text-light" style="font-size: 1rem;">Contact</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `
});

const Home = {
    data() {
        return {
            showMore: false  // This will control the visibility of the content when clicked
        };
    },
    methods: {
        toggleMore() {
            this.showMore = !this.showMore;  // Toggle the visibility of the additional content
        }
    },
    template: `
        <div class="container text-center mt-5" style="font-size: 16px; line-height: 1.5;">
            <h1 style="font-size: 2rem; font-weight: bold; color: blue;">Welcome to My Portfolio</h1>
            

            <!-- Profile Card Section with Responsive Layout -->
            <div class="row justify-content-center mb-5">
                <!-- On small screens, image and text will stack, on larger screens, they will be side by side -->
                <div class="col-12 col-lg-4">
                    <!-- Increased the size of the profile picture -->
                    <img src="../images/DSC_3665~2.JPG" class="img-fluid rounded-circle" alt="Profile Photo" style="width: 250px; height: 250px; margin: 20px auto;">
                </div>
                <div class="col-12 col-lg-8">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 1.5rem; font-weight: bold;">Hello, I'm Gaita</h5>
                            
                            <!-- "Read More" Button to show more content -->
                            <button @click="toggleMore" class="btn btn-primary" style="font-size: 1rem;">
                                {{ showMore ? 'Read Less' : 'Read More' }}
                            </button>

                            <!-- Content that is shown when the button is clicked -->
                            <div v-if="showMore" class="more-content" style="font-size: 1rem; color: black; margin-top: 15px;">
                                <p>
                                    I'm a web developer with a passion for creating dynamic and responsive websites.
                                    I'm skilled in both front-end and back-end technologies[fullstack], and I love solving complex problems through code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Responsive Card Layout using Bootstrap Grid System -->
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../images/computer-2137265_960_720.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../images/photo-1499951360447-b19be8fe80f5.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../images/pexels-serpstat-177219-572056.jpg" class="d-block w-100" alt="...">
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    `
};







const About = {
    template: `
        <div class="container mt-5" style="font-size: 16px;"> 
            <h2 style="font-size: 1.75rem; font-weight: bold; color: navy;">About Me</h2>
            
            <!-- Card layout -->
            <div class="card mb-4" style="border: none; box-shadow: none;">
                <div class="row g-0">
                    <!-- Left side: Text content -->
                    <div class="col-md-6 p-4">
                        <h3 style="font-size: 1.5rem; font-weight: bold;">I'm a web developer with a strong foundation in:</h3>
                        <ul style="font-size: 1rem; color: black;">
                            <li>Javascript</li>
                            <li>Axios</li>
                            <li>VueJs</li>
                            <li>Bootstrap</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SQL</li>
                            <li>MySQL database</li>
                        </ul>
                        <p style="font-size: 1rem; color: black;">
                            I love building interactive websites and web applications. I enjoy learning new technologies and solving complex problems.
                        </p>
                    </div>

                    <!-- Right side: Image -->
                    <div class="col-md-6">
                        <img src="../images/computer-2137265_960_720.jpg" class="img-fluid rounded-end" alt="About Me Image" style="object-fit: cover; height: 100%;"/>
                    </div>
                </div>
            </div>
        </div>
    `
};






const Projects = {
    template: `
        <div class="container mt-5" style="font-size: 16px;">
            <h2 style="font-size: 1.75rem; font-weight: bold; color: blue;">My Projects</h2>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img src="../images/hospital.jpg" class="card-img-top img-fluid" alt="Project 1" style="height: 250px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: blue;">Hospital Management 1</h5>
                            <a href="#" class="btn btn-primary" style="font-size: 1rem;">View Project</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src="../images/school.jpg" class="card-img-top img-fluid" alt="School" style="height: 250px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: blue;">School Management</h5>
                            <a href="#" class="btn btn-primary" style="font-size: 1rem;">View Project</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="../images/business.avif" class="card-img-top img-fluid" alt="Business" style="height: 250px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: blue;">Business Website</h5>
                            <a href="#" class="btn btn-primary" style="font-size: 1rem;">View Project</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="../images/photo-1499951360447-b19be8fe80f5.jpg" class="card-img-top img-fluid" alt="Photo Sell Website" style="height: 250px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: blue;">Photo Sell Website</h5>
                            <a href="#" class="btn btn-primary" style="font-size: 1rem;">View Project</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src="../images/questionnaire.jpg" class="card-img-top img-fluid" alt="Online Questionnaire Web" style="height: 250px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title" style="font-size: 1.25rem; font-weight: bold; color: blue;">Online Questionnaire Web</h5>
                            <a href="#" class="btn btn-primary" style="font-size: 1rem;">View Project</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `
};


const Contact = {
    template: `
        <div class="container mt-5" style="font-size: 16px;">
            <h2 style="font-size: 1.75rem; font-weight: bold; color: blue;">Contact Me</h2>
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label" style="font-size: 1rem;">Name</label>
                    <input type="text" class="form-control" id="name" required style="font-size: 1rem;">
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label" style="font-size: 1rem;">Email</label>
                    <input type="email" class="form-control" id="email" required style="font-size: 1rem;">
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label" style="font-size: 1rem;">Message</label>
                    <textarea class="form-control" id="message" rows="4" required style="font-size: 1rem;"></textarea>
                </div>
                <button type="submit" class="btn btn-primary" style="font-size: 1rem;">Send Message</button>
            </form>
        </div>
    `
};

// Footer component
Vue.component('footer-component', {
    template: `
        <footer style="background-color: #333; color: white; text-align: center; padding: 20px 0; margin-top: 200px;">
            <p style="font-size: 1rem; margin: 0;">Email: <a href="mailto:josgait1@gmail.com" style="color: lightblue;">josgait1@gmail.com</a></p>
            <p style="font-size: 1rem; margin: 0;">Tel: <a href="tel:+254798869590" style="color: lightblue;">+25498869590</a></p>
            <p style="font-size: 1rem; margin: 0;">&copy; G-WEB 2024</p>
        </footer>
    `
});




// Define Routes for Vue Router
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/projects', component: Projects },
    { path: '/contact', component: Contact }
];

// Create the Vue Router instance
const router = new VueRouter({
    routes
});

// Create the Vue instance
new Vue({
    el: '#app',
    router
});
