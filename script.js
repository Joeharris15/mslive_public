document.addEventListener('DOMContentLoaded', () => {
    const districtDropdown = document.getElementById('district-dropdown');
    const infoContainer = document.getElementById('info-container');

    const districtData = {
        nwfwmd: {
            name: 'Northwest Florida Water Management District',
            summary: 'The Northwest Florida Water Management District is one of five water management districts in Florida. It is responsible for managing the water resources of the Florida panhandle, covering 16 counties and serving approximately 1.5 million residents. The district\'s core missions are to ensure a sustainable water supply, protect and improve water quality, provide flood protection, and protect and restore natural systems.',
            highlights: [
                'Water Supply Planning',
                'Environmental Resource Permitting',
                'Flood Protection and Floodplain Management',
                'Springs Protection and Restoration',
                'Land Acquisition and Management for Water Resource Protection'
            ],
            links: {
                'Website': 'http://www.nwfwater.com/',
                'Rules and References': 'https://nwfwater.com/permits/rules-and-references/',
                'Permits': 'https://nwfwater.com/permits/',
                'Reports & Plans': 'https://nwfwater.com/data-publications/reports-plans/',
                'Ask a Question': 'mailto:public.information@nwfwater.com'
            }
        },
        srwmd: {
            name: 'Suwannee River Water Management District',
            summary: 'The Suwannee River Water Management District manages water and related natural resources in north-central Florida by providing water quality and quantity monitoring, research, regulation, land acquisition and management, and flood protection.',
            highlights: [
                'Water Quality and Quantity Monitoring',
                'Research and Data Collection',
                'Permitting and Regulation',
                'Land Acquisition and Management',
                'Flood Protection and Floodplain Management'
            ],
            links: {
                'Website': 'http://www.mysuwanneeriver.com/',
                'Permits & Rules': 'https://www.mysuwanneeriver.com/8/Permits-Rules',
                'Recreation': 'https://www.mysuwanneeriver.com/62/Recreational-Opportunities',
                'Water Data Portal': 'https://www.mysuwanneeriver.com/507/Water-Data-Portal',
                'Ask a Question': 'https://www.mysuwanneeriver.com/FormCenter/District-7/Contact-Us-45'
            }
        },
        sjrwmd: {
            name: 'St. Johns River Water Management District',
            summary: 'The St. Johns River Water Management District’s work is grouped into four core missions: ensuring a long-term supply of drinking water for the region’s residents and businesses; protecting and improving the health of aquatic systems; preserving and restoring natural systems, such as wetlands, marshes and floodplains; and protecting people and property from floods.',
            highlights: [
                'Water Supply',
                'Water Quality',
                'Natural Systems',
                'Flood Protection'
            ],
            links: {
                'Website': 'http://www.sjrwmd.com/',
                'Permitting': 'https://www.sjrwmd.com/permitting/',
                'Data and Tools': 'https://www.sjrwmd.com/data/',
                'Recreation': 'https://www.sjrwmd.com/lands/recreation/list/',
                'Contact Us': 'https://www.sjrwmd.com/contact/'
            }
        },
        swfwmd: {
            name: 'Southwest Florida Water Management District',
            summary: 'The Southwest Florida Water Management District is a regional agency responsible for managing water resources in west-central Florida. The District’s mission is to protect water resources, minimize flood risks and ensure the public’s water needs are met.',
            highlights: [
                'Water Conservation',
                'Water Restrictions',
                'Florida-Friendly Landscaping™',
                'Recreation on District Lands',
                'Minimum Flows and Levels (MFLs)'
            ],
            links: {
                'Website': 'https://www.swfwmd.state.fl.us/',
                'ePermitting': 'https://www.swfwmd.state.fl.us/business/epermitting',
                'Data & Maps': 'https://www.swfwmd.state.fl.us/resources/data-maps',
                'Recreation': 'https://www.swfwmd.state.fl.us/recreation',
                'Contact Us': 'https://www.swfwmd.state.fl.us/about/about-the-district/contact-us'
            }
        },
        sfwmd: {
            name: 'South Florida Water Management District',
            summary: 'The South Florida Water Management District is the oldest and largest of the state\'s five water management districts, managing water resources in a 16-county region that stretches from Orlando to the Florida Keys, serving a population of 9 million people.',
            highlights: [
                'Flood Control',
                'Water Supply Planning',
                'Water Quality Improvement',
                'Ecosystem Restoration',
                'Python Elimination Program'
            ],
            links: {
                'Website': 'https://www.sfwmd.gov/',
                'Permits': 'https://www.sfwmd.gov/doing-business-with-us/permits',
                'Real-Time Data': 'https://www.sfwmd.gov/science-data/levels',
                'Recreation': 'https://www.sfwmd.gov/community-residents/recreation',
                'Contact Us': 'https://www.sfwmd.gov/contact'
            }
        }
    };

    districtDropdown.addEventListener('change', (event) => {
        const selectedDistrict = event.target.value;
        if (selectedDistrict) {
            const data = districtData[selectedDistrict];
            infoContainer.innerHTML = `
                <h2>${data.name}</h2>
                <h3>Code Summary</h3>
                <p>${data.summary}</p>
                <h3>Highlights</h3>
                <ul>
                    ${data.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                <h3>Links</h3>
                <ul>
                    ${Object.entries(data.links).map(([text, url]) => `<li><a href="${url}" target="_blank">${text}</a></li>`).join('')}
                </ul>
                <h3>Ask a Question</h3>
                <p>Have a question about the rules? <a href="${data.links['Ask a Question'] || data.links['Contact Us'] || '#'}" target="_blank">Ask here</a>.</p>
            `;
        } else {
            infoContainer.innerHTML = '<!-- District information will be displayed here -->';
        }
    });
});
