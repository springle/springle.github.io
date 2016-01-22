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
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		"Technologies include American, APL, Javascript, Ruby.",
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
