$(document).ready(function(){

    var configJson = ""

    $.getJSON("config.json", function(json) {
        configJson = json;
        // this will show the info it in firebug console
        $("#name2").text(`Created By ${configJson["secondName"]}`)
        $("#barTerm").text(`TuxTerminal@${configJson["nameTop"]}: ~$`)
        $("body").css({"background-color": configJson["colors"]["background"]})
        $(".textColor").css("color", configJson["colors"]["textColor"]);
        $(".topBar").css({"background-color": configJson["colors"]["topBar"]})

    });

    $(document).on("keypress", ".lineEnd", function(e){
        var key = (e.keyCode || e.which);
        if(key == 13 || key == 3) {
            $(this).each(function() {
                $("<span />", { text: this.value, "class":"view" }).insertAfter(this);
                $(this).hide();
                var hold = this.value.substring(0,4)
                if(this.value === "help"){

                    $(`<div>
                        Type 'resume' for a text based resume to be shown<br>
                        Type 'github' to view my GitHub account<br>
                        Type 'linkedin' to view my LinkedIn<br>
                        Type 'project' to view links to projects<br>
                        Type 'summary' for a complete list<br>
                        Type 'gui' for the graphical portfolio site<br>
                         
                        </div>
                        <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }

                else if(this.value === "summary"){

                    $(`<div>
                        SUMMARY<br>
                        --------<br>
                        LINKS<br>
                        <a target="_blank" href=${configJson["social"]["github"]}>Github</a><br>
                        <a target="_blank" href=${configJson["social"]["linkedin"]}>LinkedIn</a><br>
                        <a target="_blank" href=${configJson["social"]["resumeLink"]}>Resume</a><br>
                        CONTACT<br>
                        <a target="_blank" href="mailto:${configJson["email"]}" >Email</a><br>
                        OTHER PORTFOLIO<br>
                        <a target="_blank" href=${configJson["gui"]}>GUI Portfolio</a><br>
                        <pre>
 ${configJson["asciiName"]} 
                        </pre>
                         
                        </div>
                        <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }

                else if(this.value === "resume"){
                    $(`<div>
                        <pre>
                        ${configJson["plainResume"]}
                         </pre>
                        </div>
                        <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });

                }

                else if(this.value === "gui"){
                    window.open(configJson["gui"], '_blank').focus();

                    $(`
                       <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }

                else if(this.value === "linkedin"){
                    window.open(configJson["social"]["linkedin"], '_blank').focus();

                    $(`
                       <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }

                else if(this.value === "github"){
                    window.open(configJson["social"]["github"], '_blank').focus();

                    $(`
                       <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }

                else if(this.value === "project"){
                    let links = "";
                    for (const key in configJson){
                        if(key === "projects"){
                            if (configJson.hasOwnProperty(key)) {
                                for (const key1 in configJson[key]){
                                    console.log(configJson[key][key1]);
                                    links += "<a href=" + configJson[key][key1] + " target='_blank'>" + configJson[key][key1] + "</a><br>"
                                }
                            }
                        }
                    }

                    $(`
                        <div>
                        Projects<br>
                        --------<br>
                        ${links}
                        </div>
                       <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }

                else if(hold === "echo"){
                    var g = this.value.substring(4,this.value.length);
                    $(`<div style="">
                        ${g}<br>
                        </div>
                        <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }

                else if(this.value === "files"){
                    let links = ""
                    for (const key in configJson){
                        if(key === "files"){
                            if (configJson.hasOwnProperty(key)) {
                                for (const key1 in configJson[key]){
                                    console.log(configJson[key][key1]);
                                    links += "<a href=" + configJson[key][key1] + " target='_blank'>" + configJson[key][key1] + "</a><br>"
                                }
                            }
                        }
                    }

                    $(`<div style="">
                        Files<br>
                        -----<br>
                        ${links}
                        </div>
                        <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }


                else if(this.value !== ""){
                    $(`<div style="color:red">
                        TuxTerminal: Error, Command not found, please type 'help' if unsure.<br>
                         
                        </div>
                        <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;
                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }
                else{
                    $(`
                        <div class="cursor"><span style="color: ${configJson["colors"]["terminal@"]}; padding-right: .0%;">TuxTerminal@KarsonHodge:~$</span>
                    <input class="lineEnd" type="text" autofocus style="border: none; background-color: ${configJson["colors"]["background"]}; width: 75%;" /></div>
                        `).insertAfter($(".cursor").last());

                    var element = document.getElementById("terminal");
                    element.scrollTop = element.scrollHeight;

                    $("input").select().focus().blur(function() {
                        setTimeout(function() { $("input").focus(); }, 0);
                    });
                }




            });
        }
    })


    const app = Vue.createApp({
        data() {
            return {
                text: '',
            }
        },
        methods: {
            writeText() {
                this.text = 'Hello World!'
            },

        }
    })
    app.mount('#app')



    $("input").select().focus().blur(function() {
        setTimeout(function() { $("input").focus(); }, 0);
    });









    var txt = "Karson Hodge\n" +
        "Calgary, AB | 403-820-2405 | khodge1@hotmail.com | https://hodge-py.github.io/ \n" +
        "\n" +
        "EDUCATION\n" +
        "Southern Arkansas University\tAug 2023 – Present\n" +
        "Master of Science in Computer and Information Science\n" +
        "* Cumulative GPA: 3.8 / 4.0\n" +
        "* Concentration in Data Science\n" +
        "* Advanced Programming Concepts, Database Management Systems.\n" +
        "\n" +
        "University of Lethbridge\tSept 2016 – Apr 2021\n" +
        "Bachelor of Science in Applied Statistics\n" +
        "* Concentration in Economics\t\n" +
        "\t\n" +
        "WORK EXPERIENCE\t\n" +
        "Eaton Corporation\tCalgary, AB\n" +
        "Continuous Improvement Intern\tMay 2024 – Present\n" +
        "* Assumed the role of product specialist along with all duties associated when filling in for a full-time employee on five weeks leave.\n" +
        "* Handled the operations of the panel board line, maintaining a safe level of uptime to ensure production targets were met.\n" +
        "* Redesigned inventory layout and implemented a new labelling system, reducing item retrieval time by ease of access and standardization.\n" +
        "* Developed and implemented protocols for efficient data loading, minimizing errors and improving data reliability.\n" +
        "\n" +
        "Peoples Trust Company\tCalgary, AB\n" +
        "Real Estate Analyst\tFeb 2022 – July 2023\n" +
        "* Provided Underwriting for CMHC insured commercial loans to verify information, calculate risk, and insert profit spread.\n" +
        "* Utilized excel to build cashflow models of pre-existing or construction-based properties, using financials and broker provided packages.\n" +
        "* Verified new purchases of existing properties by either completing an internal assumption or CMHC approved replacement of covenant.\n" +
        "* Created relationships with mortgage brokers when working on new deals, gathering documentation and networking at events.\n" +
        "* Maintained strong lines of communication with colleagues to assure deals are vetted and processed correctly.\n" +
        "\n" +
        "Universal Rehabilitation Service Agency\tCalgary, AB\n" +
        "Data Analyst and Quality Assurance\tNOV 2021 – Feb 2022\n" +
        "* Developed and utilized databases with Microsoft Excel to improve quality control.\n" +
        "* Modelled confidential data with accurate charts, metrics, and trends to evaluate programs impact.\n" +
        "* Audited licenses and program files vetting for any legal mistakes or incorrect forms in compliance with accreditation agency standards.\n" +
        "* Proposed new data collection strategies while maintaining great verbal and written communication with management to improve the development of documentation and policy.\n" +
        "* Initiated a research project with Python and its statistical analysis modules to analyse program goals and develop dashboards with Power BI.\n" +
        "\n" +
        "PROJECTS\t\n" +
        "Unknown-md.com\tFeb 2024 – Present\n" +
        "* Markdown editor and render built with a HTML, CSS, JavaScript, and PHP Stack with the Bootstrap Framework and jQuery library.\n" +
        "\n" +
        "ADDITIONAL\t\n" +
        "Languages: Python, Java, SQL, JavaScript, HTML, and CSS.\n" +
        "Misc: Linux Commands, Pandas, NumPy, and Matplotlib.\n" +
        "LinkedIn: https://www.linkedin.com/in/karson-hodge/ \n"

})