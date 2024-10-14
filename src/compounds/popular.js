import course1 from '../images/c.jpg';
import course2 from '../images/c++.jpg';
import course3 from '../images/java.jpg';
import course4 from '../images/rdbms.jpg';
import course5 from '../images/php.jpg';
import course6 from '../images/mongo.png';
import course7 from '../images/react.png';
import course8 from '../images/c#.png';
import course9 from '../images/data.jpg';
import course10  from '../images/angular.jpg';
import course11 from '../images/js.jpg';
import course12 from '../images/net.png';

function Popular (){
    return(
        <div class="popular">
        <h1 class="popular__title"> Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>
        <div class="popular__container">
           
            <div class="course-card">
                <img src={course1} alt='course1'></img>
                <h3>2024 C Programming</h3>
                <p>Col steel</p>
                <p>3.9⭐⭐⭐</p>
                <p>449   <del>1999</del> </p>
            </div>
       
            <div class="course-card">
                <img src={course2} alt='course2'></img>
                <h3>C++ Programming</h3>
                <p>Col steel</p>
                <p>3.9⭐⭐⭐</p>
                <p>449   <del>1999</del></p>
            </div>

            
            <div class="course-card">
                <img src={course3} alt='course3'></img>
                <h3> Java Programming</h3>
                <p>Col steel</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>2999 <del>5999</del></p>
            </div>
    
            <div class="course-card">
               <img src={course4} alt='course4'></img>
                <h3> RDBMS Programming</h3>
                <p>Col steel</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1999   <del>3999</del></p>
            </div>
            
            <div class="course-card">
                <img src={course5} alt='course5'></img>
                <h3> PHP </h3>
                <p>Col steel</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>999   <del>1999</del> </p>
            </div>
            
                    
           <div class="course-card">
                <img src={course6} alt='course6'></img>
                <h3>Mongo DB</h3>
                <p>Col steel</p>
                <p>3.9⭐⭐⭐</p>
                <p>1999   <del>3999</del></p>
           </div>
            
                        
          <div class="course-card">
                <img src={course7} alt='course7'></img>
                <h3> React JS</h3>
                <p>Col steel</p> 
                <p>4.9⭐⭐⭐⭐</p>
                <p>2999 <del>4999</del></p>
           </div>
            
                            
          <div class="course-card">
                <img src={course8} alt='course8'></img>
                <h3> C# Programming</h3>
                <p>Col steel</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>559   <del>1999</del></p>
          </div>
                               
         <div class="course-card">
                <img src={course9} alt='course9'></img>
                <h3>Data Science</h3>
                <p>Col steel</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>2999   <del>4999</del></p>
        </div>

          <div class="course-card">
                <img src={course10} alt='course10'></img>
                <h3> Angular</h3>
                <p>Col steel</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1999   <del>3999</del></p>
          </div>

         <div class="course-card">
                <img src={course11} alt='course11'></img>
                <h3> JavaScript</h3>
                <p>Col steel</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>1999   <del>4999</del></p>
        </div>

        <div class="course-card">
               <img src={course12} alt='course12'></img>
               <h3> .Net</h3>
               <p>Col steel</p>
               <p>4.9⭐⭐⭐⭐</p>
               <p>449   <del>1999</del></p>
        </div>
        </div>
        </div>
    )
}
export default Popular