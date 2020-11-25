import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition{
    //Resposible for the page that are coming in
    in({from,to,done}){
        const timeline = new TimelineLite();
        timeline.fromTo(to, 0.5, {left: "-100%", top: "50%"}, {left: "0%"})
        .fromTo(
            to, 0.5, {height: "2vh"},
            { height: "90vh", top: "10%", onComplete: function(){
                from.remove();
                done();
            }}).fromTo(to.children[0], 2, {opacity: 0}, {opacity:1})
            ;
    }

    //Resposible for the page going out
    out({from,done}){
        done();
    }
}

export default Fade;
