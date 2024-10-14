import one from '../images/python.jpg';
import two from '../images/sql.jpg';
import three from '../images/web.jpg';
import four from '../images/ux.jpg';

function Recommended (){
    return(

<div className="recommended">
<h1 className="recommended_title"> Recommended for you</h1>
<p>Pick the best fit</p>
<div className="recommended__container">
    <div className="course-card">
        <img src={one} alt="python"></img>
        <h3>2024 Python Master Class</h3>
        <p>Col steel</p>
        <p>4.9⭐⭐⭐⭐</p>
        <p>999  <del>3999</del> </p>
    </div>


        <div className="course-card">
            <img src={two} alt="sql"></img>
            <h3>SQL Basic Class</h3>
            <p>Col steel</p>
            <p>3.9⭐⭐⭐</p>
            <p>449   <del>1999</del></p>
        </div>

    
            <div className="course-card">
                <img src={three} alt="web"></img>
                <h3> Web Development Bootcamp 2024</h3>
                <p>Col steel</p>
                <p>4.9⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

        
                <div className="course-card">
                    <img src={four} alt="ux"></img>
                    <h3> Master UI/UX Designing With Figma</h3>
                    <p>Col steel</p>
                    <p>4.9⭐⭐⭐⭐</p>
                    <p>449   <del>1999</del></p>
                </div>
</div>
</div>
)
}

export default Recommended;