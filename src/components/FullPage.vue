<template>
    <div class="full-page">
		<div class="section content1">
            <div class="title-container">
                <span>F</span>
                <span>L</span>
                <span>O</span>
                <span>R</span>
                <span>I</span>
                <span>G</span>
                <span>E</span>
                <span>N</span>
                <span>&nbsp;</span>
                <span>R</span>
                <span>O</span>
                <span>B</span>
                <span>O</span>
                <span>T</span>
                <span>I</span>
                <span>C</span>
                <span>S</span>
            </div>
		</div>
		<div class="section content2">
            <div class="content-container"> 
                <div class="text-container">
                    <h2>Monitoring</h2>
                    <div>Know exactly what is happening with your robots with powerful monitoring across your entire fleet. Florigen Robotics Mission Control® gives you the benefit of:</div>
                    <div>Logging: Collect data across all your devices, organized efficiently and available for replay at a moment’s notice. </div>
                    <div>Visualization: Beautiful and customizable dashboards let you get insights in seconds about the present or past state of a robot. </div>
                    <div>Sharing: Enable collaboration between teams with fast and secure sharing of data and dashboards.</div>
                </div>
                <div class="img-wrapper">
                </div>
            </div>
		</div>
        <div class="section content3">
            <div class="content-container"> 
                <div class="text-container">
                    <h2>Control</h2>
                    <div>Use our powerful suite of remote control and teleoperation tools to give your engineering and operations team an edge when dealing with remote fleets.</div>
                    <div>Teleop in when an issue arises and navigate the robot to safety with intuitive, low-latency controls for your robot’s custom configuration, or run a command remotely to get it back to its desired state. You can even drive the robot with a map or with GPS, and user permissions mean that you can manage access across your teams easily. </div>
                </div>
                <div class="img-wrapper">
                </div>
            </div>
		</div>
        <div class="section content4">
            <div class="content-container"> 
                <div class="text-container">
                    <h2>Analysis</h2>
                    <div>Get to the root cause of an issue quickly with rapid analysis, statistics tracking, and customizable data streams. Linked robot, system, logging, and other data allows correspondence for training sets and more.</div>
                    <div>Analyze data across your entire fleet and make informed decisions to ensure uptime and manage cost overruns. Use our API to instantly access all  of your robot data for aggregating statistics, monitoring systems, and integrating with custom endpoints. </div>
                </div>
                <div class="img-wrapper">
                </div>
            </div>
		</div>
        <div class="section content5">
                <h2>Pater's</h2>
                <div class="patner-logo">
                <img src="../assets/partner-logo/1x/gs_e_c.png">
                </div>
		</div>
        <div class="section footer">
            <div class="content-container"> 
                <div class="company-info-container">
                    <div>
                        <img  class="logo" src="../assets/partner-logo/1x/gs_e_c.png">
                        <span>
                            <div><span class="tel-label">Tel.</span><span class="tel-number">010-0000-0000</span></div>
                            <div>email: kimdk4618@gmail.com</div>
                            <div>address: 대구광역시 동구</div>
                        </span>
                    </div>
                </div>
                <div class="contact-us">
                    <form id="contact-form">
                        <input type="hidden" name="contact_number">
                        <label>Name</label>
                        <input type="text" name="user_name">
                        <label>Email</label>
                        <input type="email" name="user_email">
                        <label>Message</label>
                        <textarea name="message"></textarea>
                        <input type="submit" value="Send">
                    </form>
                </div>
            </div>
		</div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useStore } from "vuex";

export default {
    name: 'FullPage',
    props: {
    },
    setup(){
        const store = useStore();
        let inMove = false;
		let activeSection = 0;
		let offsets = [];
		let touchStartY = 0;

        const calculateSectionOffsets = function() {
            let sections = document.getElementsByClassName('section');
            let length = sections.length;

            for(let i = 0; i < length; i++) {
                let sectionOffset = sections[i].offsetTop;
                offsets.push(sectionOffset);
            }
        }
        const handleMouseWheel = function(e) {
            
            if (e.wheelDelta < 5 && !inMove) {
                moveUp();
            } else if (e.wheelDelta > 5 && !inMove) {
                moveDown();
            }
                
            e.preventDefault();
            return false;
        }
        const handleMouseWheelDOM = function(e) {
            
            if (e.detail > 0 && !inMove) {
                moveUp();
            } else if (e.detail < 0 && !inMove) {
                moveDown();
            }
            
            return false;
        }
        const moveDown = function() {
            inMove = true;
            activeSection--;
                
            // if(activeSection < 0) activeSection = offsets.length - 1;
            if(activeSection < 0) activeSection = 0;
            
            scrollToSection(activeSection, true);
        }
        const moveUp = function() {
            inMove = true;
            activeSection++;
                
            // if(activeSection > offsets.length - 1) activeSection = 0;
            if(activeSection > offsets.length - 1)  activeSection -= 1;
                
            scrollToSection(activeSection, true);
        }
        const scrollToSection = function(id, force = false) {
            if(inMove && !force) return false;
            
            activeSection = id;
            store.dispatch('main/setPageIndex', id);
            inMove = true;
            
            
            setTimeout(() => {
                inMove = false;
            }, 400);
            
        }
        const touchStart = function(e) {
            e.preventDefault();
            
            touchStartY = e.touches[0].clientY;
        }
        const touchMove = function(e) {
            if(inMove) return false;
            e.preventDefault();
            
            const currentY = e.touches[0].clientY;
            
            if(touchStartY < currentY) {
                moveDown();
            } else {
                moveUp();
            }
            
            touchStartY = 0;
            return false;
        }

        store.watch(() => store.getters['main/currentPageIndex'], index => {
            activeSection = index;
            document.getElementsByClassName('section')[index].scrollIntoView({behavior: 'smooth'});
            inMove = true;
            
            
            setTimeout(() => {
                inMove = false;
            }, 400);
        });

        onMounted(() => {
            calculateSectionOffsets();
        
            window.addEventListener('DOMMouseScroll', handleMouseWheelDOM);  // Mozilla Firefox
            window.addEventListener('mousewheel', handleMouseWheel, { passive: false }); // Other browsers
            
            window.addEventListener('touchstart', touchStart, { passive: false }); // mobile devices
            window.addEventListener('touchmove', touchMove, { passive: false }); // mobile devices
        })
        return{

        }
    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@for $i from 1 through 17 {
  .title-container span:nth-child(#{$i}) {
    animation-delay: calc(200ms * #{$i});
  }
}
</style>
<style scoped>
.title-container{
    display: flex;
    justify-content: center;
    align-items: center;

}
.title-container span{
    font-family: "Montserrat";
    text-transform: uppercase;
    font-weight: bold;
    font-size: 5em;
    color: #fff;
    letter-spacing: 2rem;
    /*   filter: blur(3px); */
    animation: blurMe 1.4s ease-in-out forwards;
    opacity: 0;
}

@keyframes blurMe {
  0% {
    filter: blur(10px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
}

.section {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.footer{
    height: 40vh !important;
    background: #000000ee;
    color: white;
}

.content2, .content3, .content4{
    display:flex;
    flex-direction: row;
    color: white;
}

h2{
    font-size: 4em;
    margin: 0;
    text-align: left;
    color: white;
}
h3{
    font-size: 2.5em;
    flex:1;
    margin: 0 0 20px 0;
    text-align: center;
    color: white;
}
.content-container{
    display:flex;
    flex:1;
    margin: 0 20.6250vw;
}

.text-container{    
    flex:1;
}
.text-container div{
    
    width:26.0417vw;
    margin: 15px 0;
}
.img-wrapper{
    flex:1;
}

.content5{
    background: #000000aa;
}
#contact-form{
    display:flex;
    flex:1;
    padding: 0 30px;
    flex-direction: column;
}
#contact-form input[type=text], #contact-form input[type=email]{
    height:2.9630vh;
    background: #ffffff55;
    border: solid 1px white;
    border-radius: 4px;
}
#contact-form input[type=submit]{
    height: 2.9630vh;
}
#contact-form label{
    margin: 5px;
}
.company-info-container{
    width:31.0417vw;
    margin: auto;
}
.contact-us{
    display:flex;
    width:24.0417vw;
    margin: 30px ;
}
#contact-form textarea{
    flex:1;
    margin-bottom: 20px;
    background: #ffffff55;
    border:solid 1px white;
    resize: none;
}
.patner-logo{
    margin: 30px 0;
}
.logo{
    float:left;
    margin: 0 20px;
}
.tel-label{
    font-size: 1.5em;
}
.tel-number{
    font-size: 1.1em;
}
</style>
