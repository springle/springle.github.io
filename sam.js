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
		"Member of the Class of 2016 <a href='http://hackny.org/a/fellows/'>HackNY Fellowship</a>.",
		"Interned at ______ for 10 weeks as a Software Engineer.",
		"Worked on projects including ________________.",
		"Learned _________________.",
		"Used the following technologies: __________________.",
	    ],
	},
    ],
    degrees: [
	{
	    start: new Date("2010-08-30"),
	    end: new Date("2015-06-03"),
	    institution: "The Downingtown STEM Academy",
	    degree: "International Baccalaureate",
	    summary: ["Summa Cum Laude"],
	    location: "Downingtown, PA",
	},
	{
	    start: new Date("2015-08-22"),
	    end: new Date("2019-05-15"),
	    degree: "BA in Computer Science",
	    summary: ["Degree Anticipated"],
	    institution: "The University of California, Berkeley",
	    location: "Berkeley, CA",
	},
    ],
    academicExperience: [
	{
	    start: new Date("2016-01-19"),
	    end: new Date("2016-05-15"),
	    title: "CS61A Lab Assistant",
	    institution: "The University of California, Berkeley",
	    location: "Berkeley, CA",
	},
    ],
};


drawCV(data);
