var data = {
    name: "Sam Pringle",
    summary: "19 year-old computer science student.",
    email: "sampringle@berkeley.edu",
    github: "https://github.com/springle",
    linkedin: "https://www.linkedin.com/in/sampringle",
    professionalExperience: [
	{
	    start: new Date("2016-05-30"),
        end: new Date("2016-08-05"),
	    title: "Software Engineer",
	    role: "Intern",
	    company: "HackNY",
	    location: "New York City, NY",
	    summary: [
		"Member of the Class of 2016 HackNY Fellowship.",
	    ],
	},
    {
      start: new Date("2016-01-13"),
      end: new Date("2016-05-13"),
      title: "Lab Assistant",
      role: "",
      company: "CS61A",
      location: "Berkeley, CA",
      summary: [
    "Help students figure out difficult problems on labs/homework, answer questions, assist course staff.",
      ],
  },
    {
	    start: new Date("2013-08-01"),
      end: new Date("2014-07-07"),
	    title: "Associate",
	    role: "Cashier",
	    company: "The Medicine Shoppe",
	    location: "Downingtown, PA",
	    summary: [
		"Pulled and stocked medicine, counted pills, helped customers, operated the register, and answered phones.",
	    ],
	},
    ],
    degrees: [
  {
	    start: new Date("2015-08-22"),
	    end: new Date("2019-05-15"),
	    degree: "BA in Computer Science",
	    summary: ["Degree Anticipated"],
	    institution: "The University of California, Berkeley",
	    location: "Berkeley, CA",
	},
	{
	    start: new Date("2010-08-30"),
	    end: new Date("2015-06-03"),
	    institution: "The Downingtown STEM Academy",
	    degree: "International Baccalaureate",
	    summary: ["Summa Cum Laude"],
	    location: "Downingtown, PA",
	},
    ],
    academicExperience: [
	{
	    start: new Date("2015-12-26"),
	    end: new Date("2016-02-15"),
	    title: "<a href='https://github.com/joechip504/sc2-barcode-scanner' target='_blank'>SC2 Barcode Scanner</a>",
	},
  {
	    start: new Date("2013-12-26"),
	    end: new Date("2014-01-15"),
	    title: "<a href='http://ttllmm.herokuapp.com' target='_blank'>Turtles That Look Like McConnell</a>",
	},
  {
	    start: new Date("2015-10-15"),
	    end: new Date("2015-11-15"),
	    title: "<a href='https://github.com/springle/PythonTweetMatch' target='_blank'>Tweet Match</a>",
	},
    ],
};


drawCV(data);
