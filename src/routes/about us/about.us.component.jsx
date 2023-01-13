import './about.us.styles.css';
import '../../index.css';
import Planning from '../../assets/images/planning.jpg';
import Design from '../../assets/images/design.jpg';
import Development from '../../assets/images/development.jpg';
import Production from '../../assets/images/production.jpg';



const AboutUs = () => {
   
      return (
        <section>
        <div className='container main-abt-us'>
        <div className='abt-us'>
        <h2 className='secondary-heading text-center'>Who we are</h2>
        <p className='abt-us-description'>We are a Corporate Branding Agency with a Team of Professionals providing exceptional Business Solution & Consultancy Services in a world where trusted services are in short supply. Branding, Publicity & Media Technology is our Business and one hundred percent perfection is our goal, yes, we can.</p>
        </div>
        <div className='abt-us'>
        <h2 className='secondary-heading text-center'>Our Unique Approach</h2>
        <p className='abt-us-description'>Unique approach
        At Coralclouds, you’ll benefit from our four-phased approach. This method shows us your whole organization, allowing us to identify the best strategy, the tactics that will bring you success, and how you can improve upon that success.</p>
        </div>
        </div>
        <div >
        <p className='subheading'>Still about us</p>
        <h2 className='secondary-heading'>Our Development Process</h2>
        
        </div>

        <div className='grid grid--2-cols'>
        {/* Dev process 1*/}
        <div className='abt-us-txt-box'>
        <p className='abt-us-number'>01</p>
        <h3 className='tertiary-heading'>Planning</h3>
        <p className='abt-us-description'>In this initial phase we align our project team with yours on the landscape you operate in, and the context of the project. We will conduct research based on both internal sources (stakeholder interviews, sales reports and business strategy documents etc.) and external sources (industry trends, competitor research and customer research).</p>
        
        </div>
       <div className='abt-us-img-box'>
       <img className='abt-us-img' src={Planning} alt='planning stage'/>
       </div>

        {/* Dev process 2*/}
       <div className='abt-us-img-box'>
       <img className='abt-us-img' src={Design} alt='planning stage'/>
       </div>

       <div className='abt-us-txt-box'>
       <p className='abt-us-number'>02</p>
       <h3 className='tertiary-heading'>Design</h3>
       <p className='abt-us-description'>In this initial phase we align our project team with yours on the landscape you operate in, and the context of the project. We will conduct research based on both internal sources (stakeholder interviews, sales reports and business strategy documents etc.) and external sources (industry trends, competitor research and customer research).</p>
       
       </div>

        {/* Dev process 3*/}
        <div className='abt-us-txt-box'>
        <p className='abt-us-number'>03</p>
        <h3 className='tertiary-heading'>Development</h3>
        <p className='abt-us-description'>In this initial phase we align our project team with yours on the landscape you operate in, and the context of the project. We will conduct research based on both internal sources (stakeholder interviews, sales reports and business strategy documents etc.) and external sources (industry trends, competitor research and customer research).</p>
        
        </div>
       <div className='abt-us-img-box'>
       <img className='abt-us-img' src={Development} alt='planning stage'/>
       </div>

         {/* Dev process 2*/}
         <div className='abt-us-img-box'>
         <img className='abt-us-img' src={Production} alt='planning stage'/>
         </div>
  
         <div className='abt-us-txt-box'>
         <p className='abt-us-number'>04</p>
         <h3 className='tertiary-heading'>Production</h3>
         <p className='abt-us-description'>In this initial phase we align our project team with yours on the landscape you operate in, and the context of the project. We will conduct research based on both internal sources (stakeholder interviews, sales reports and business strategy documents etc.) and external sources (industry trends, competitor research and customer research).</p>
         
         </div>
        
        </div>
        </section>

        );
      }
      
      
      
      export default AboutUs;
 