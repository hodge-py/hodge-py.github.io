<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Questions</title>
    <link href="./public/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/games" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/metal-gear-solid" rel="stylesheet">
</head>
<body>
<div id="app">


<div id="#" class="d-flex flex-column container-fluid justify-content-center main-content" style="">

    <div class="container d-flex justify-content-evenly" style="" >

        <div class="flex-grow-1 p-5 rounded" style="box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);">
        <h1 class="" style="font-size: 5vw;">
            Hello There.
        </h1>
            <p style="font-size: 2vw;"> I'm karson, a Frontend/Backend Developer.</p>
        </div>

        <div class="d-flex flex-column text-center p-5 border-start border-bottom" style="box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);">
            <h1 class="border-bottom">menu</h1>
            <p class="pValue" style=""><a class="lack" href="#">Home</a></p>
            <p class="pValue"><a class="lack" href="#education">EDU/Skills</a></p>
            <p class="pValue"><a class="lack" href="#projects">Projects</a></p>
            <p class="pValue"><a class="lack" href="#">Contact</a></p>
        </div>
    </div>

    </div>


    <div id="education" class="d-flex flex-column container-fluid justify-content-center main-content" style="">

        <div class="container d-flex justify-content-evenly" style="" >

            <div class="flex-grow-1 p-5 rounded" style="box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);border-style: dotted; border-color: rgba(255,255,255,.2)">
                <h1 class="pb-3" style="font-size: 5vw;">
                    EDU/Skills
                </h1>
                <div class="d-flex justify-content-evenly">
                    <div>
                <p style="font-size: 1.5vw;"><u>Education</u></p>
                        <ul style="font-size: 1vw;">
                            <li>Southern Arkansas University 2023/2025</li>
                                <ul>
                                <li>Masters of science in computer and Information science</li>
                                    <ul>
                                        <li>Concentration in Data Science</li>
                                    </ul>
                                </ul>
                        </ul>
                        <ul style="font-size: 1vw;">
                            <li>University of Lethbridge 2016/2021</li>
                            <ul>
                                <li>Bachelors of Science in Applied Statistics</li>
                                <ul>
                                    <li>Concentration in Economics</li>
                                </ul>
                            </ul>
                        </ul>
                    </div>

                    <div>
                        <p style="font-size: 1.5vw;"><u>Skills</u></p>
                        <ul style="font-size: 1vw;">
                            <li>Languages</li>
                            <ul style="font-size: 1vw;">
                                <li>Python</li>
                                <li>Java</li>
                                <li>PHP</li>
                                <li>HTML/CSS/JS</li>
                            </ul>
                            <li>Frameworks</li>
                            <ul style="font-size: 1vw;">
                                <li>Vuejs</li>
                                <li>Bootstrap</li>
                            </ul>
                        </ul>
                    </div>

                </div>
            </div>

        </div>

    </div>



    <div id="projects" class="d-flex flex-column container-fluid justify-content-center main-content" style="">

        <div class="container d-flex justify-content-evenly" style="" >

            <div class="flex-grow-1 p-5 rounded" style="box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4); border-style:dotted;border-color: rgba(255,255,255,.2)">
                <h1 class="pb-3" style="font-size: 5vw;">
                    Projects
                </h1>

                </div>
            </div>

        </div>

    </div>


</div>

<script src="./public/js/bootstrap.bundle.min.js"></script>
<script
        src="https://unpkg.com/vue@3/dist/vue.global.js">
</script>
</body>

<style>
    body {
        color: rgba(255, 255, 255, 0.95);
        margin: 0;
        padding: 0;
        font-family: 'Games', sans-serif;
    }

    .pValue {
        text-shadow: 0 0px 2px black;
    }

    .lack {
        text-decoration: none;
    }

    p, h1, ul, li {
        text-shadow: black 0px 0px 10px;
    }
    @keyframes animatedBackground {
        from {
            background-position: 0 0;
        }
        to {
            background-position: 100% 0;
        }
    }

    .main-content {
        background-image: url('pexels-felixmittermeier-956999.jpg');
        background-size: repeat;
        padding: 1% 0% 0% 0%;
        min-height: 100vh;
        animation: animatedBackground 600s linear infinite;
    }


</style>

<script>


    const app = Vue.createApp({
        data() {
            return {
                message: "Hello World!",
                count: 0,
                xPos: 0,
                yPos: 0
            }
        },
        methods: {
            mousePos(event) {
                this.xPos = event.offsetX
                this.yPos = event.offsetY
            }
        }
    })

    app.mount('#app')
</script>

</html>