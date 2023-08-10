

const Services = () => {
      const serviceData = [
        { id: 1, icon: '<i class="fa-solid fa-magnifying-glass-chart"></i>', title: 'Claims Analysis', description: '' },
        { id: 2, icon: '<i class="fa-solid fa-file-lines"></i>', title: 'Written Estimates', description: '' },
        { id: 3, icon: '<i class="fa-solid fa-house"></i>', title: 'Roof Assessment', description: '' },
        { id: 4, icon: '<i class="fa-solid fa-water-ladder"></i>', title: 'Ladder Assist', description: '' },
        { id: 5, icon: '<i class="fa-solid fa-clipboard-list"></i>', title: 'Claims Appraisals', description: '' },
        { id: 6, icon: '<i class="fa-solid fa-list-check"></i>', title: 'Administrative Tasks', description: '' },
        
      ]
    
      return (
          <div className="services">
                <h1 className='services-heading'>OUR SERVICES</h1>
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