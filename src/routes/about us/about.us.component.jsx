import './about.us.styles.css';
import '../../index.css';
import { Carousel } from 'react-carousel-minimal';
import Planning from '../../assets/images/planning.jpg';



const AboutUs = () => {
    const data = [
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
          caption: "Scotland"
        },
        {
          image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
          caption: "San Francisco"
        },
        {
          image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
          caption: "Scotland"
        },
        {
          image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
          caption: "Darjeeling"
        },
        {
          image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
          caption: "San Francisco"
        },
        {
          image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
          caption: "Scotland"
        },
        {
          image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
          caption: "Darjeeling"
        }
      ];
    
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
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
       <img className='abt-us-img' src={Planning} alt='planning stage'/>
       </div>

       <div className='abt-us-txt-box'>
       <p className='abt-us-number'>02</p>
       <h3 className='tertiary-heading'>Planning</h3>
       <p className='abt-us-description'>In this initial phase we align our project team with yours on the landscape you operate in, and the context of the project. We will conduct research based on both internal sources (stakeholder interviews, sales reports and business strategy documents etc.) and external sources (industry trends, competitor research and customer research).</p>
       
       </div>

        {/* Dev process 3*/}
        <div className='abt-us-txt-box'>
        <p className='abt-us-number'>03</p>
        <h3 className='tertiary-heading'>Planning</h3>
        <p className='abt-us-description'>In this initial phase we align our project team with yours on the landscape you operate in, and the context of the project. We will conduct research based on both internal sources (stakeholder interviews, sales reports and business strategy documents etc.) and external sources (industry trends, competitor research and customer research).</p>
        
        </div>
       <div className='abt-us-img-box'>
       <img className='abt-us-img' src={Planning} alt='planning stage'/>
       </div>

         {/* Dev process 2*/}
         <div className='abt-us-img-box'>
         <img className='abt-us-img' src={Planning} alt='planning stage'/>
         </div>
  
         <div className='abt-us-txt-box'>
         <p className='abt-us-number'>04</p>
         <h3 className='tertiary-heading'>Planning</h3>
         <p className='abt-us-description'>In this initial phase we align our project team with yours on the landscape you operate in, and the context of the project. We will conduct research based on both internal sources (stakeholder interviews, sales reports and business strategy documents etc.) and external sources (industry trends, competitor research and customer research).</p>
         
         </div>
        
        </div>
        </section>

        );
      }
      
      
      
      export default AboutUs;
      // <div className="App">
      //   <div style={{ textAlign: "center" }}>
      //     <h2>React Carousel Minimal</h2>
      //     <p>Easy to use, responsive and customizable carousel component for React Projects.</p>
      //     <div style={{
      //       padding: "0 20px"
      //     }}>
      //       <Carousel
      //         data={data}
      //         time={2000}
      //         width="850px"
      //         height="500px"
      //         captionStyle={captionStyle}
      //         radius="10px"
      //         slideNumber={true}
      //         slideNumberStyle={slideNumberStyle}
      //         captionPosition="bottom"
      //         automatic={true}
      //         dots={true}
      //         pauseIconColor="white"
      //         pauseIconSize="40px"
      //         slideBackgroundColor="darkgrey"
      //         slideImageFit="cover"
      //         thumbnails={true}
      //         thumbnailWidth="100px"
      //         style={{
      //           textAlign: "center",
      //           maxWidth: "850px",
      //           maxHeight: "500px",
      //           margin: "40px auto",
      //         }}
      //       />
      //     </div>
      //   </div>
      // </div>