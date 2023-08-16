

const Services = () => {
      const serviceData = [
        { id: 1, icon: '<i class="fa-solid fa-magnifying-glass-chart"></i>', title: 'Claims Analysis', description: 'Our experienced team provides in-depth claims analysis to help you understand the intricacies of your insurance claims. We evaluate the details and provide clear insights into the process ahead.' },
        { id: 2, icon: '<i class="fa-solid fa-file-lines"></i>', title: 'Written Estimates', description: 'Accurate and detailed written estimates are a cornerstone of our service. We ensure that you have a comprehensive understanding of the costs and scope involved in your claims or projects.' },
        { id: 3, icon: '<i class="fa-solid fa-house"></i>', title: 'Roof Assessment', description: 'Our experts conduct thorough roof assessments to assess damage, deterioration, and overall condition. We provide you with valuable information to make informed decisions.' },
        { id: 4, icon: '<i class="fa-solid fa-water-ladder"></i>', title: 'Ladder Assist', description: 'We offer ladder assist services to assist with initial assessments and evaluations, ensuring that no detail is overlooked. Our team is equipped to access challenging areas safely.' },
        { id: 5, icon: '<i class="fa-solid fa-clipboard-list"></i>', title: 'Claims Appraisals', description: 'Our skilled appraisers provide comprehensive claims appraisals, considering all factors to accurately assess the value of your claims and assets.' },
        { id: 6, icon: '<i class="fa-solid fa-list-check"></i>', title: 'Administrative Tasks', description: 'We understand the administrative burden that often accompanies claims and projects. Let us handle the paperwork and administrative tasks, allowing you to focus on other important matters.' },
        
      ]
    
      return (
          <div className="services">
                <h1 id="services" className='services-heading'>OUR SERVICES</h1>
                <div className="grid-container">
                {serviceData.map(service => (
                      <div className='gallery' key={service.id}>
                            <div className='card grid-item'>
                                  <div className='icon' dangerouslySetInnerHTML={{ __html: service.icon }} />
                                  <h2 className='service-title'>{service.title}</h2>
                                  <p className='service-description'>{service.description}</p>
                            </div>
                      </div>
                ))}
                </div>
          </div>
        )
        
    }
    
    export default Services