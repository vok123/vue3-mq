const { version } = require("../../meta");

module.exports = [
	{
		text: "Frequently Asked Questions",
		link: "/faq/",
	},
	{
		text: `Current: v${version}`,
		children: [
			{
				text: "Version 3",
				children: [
					{
						text: "v3.1.0",
						link: "/changelog/v3.1.0",
					},
					{
						text: "v3.0.3",
						link: "/changelog/v3.0.3",
					},
					{
						text: "v3.0.2",
						link: "/changelog/v3.0.2",
					},
					{
						text: "v3.0.0",
						link: "/changelog/v3.0.0",
					},
				],
			},
			{
				text: "Version 2",
				children: [
					{
						text: "v2.3.3",
						link: "/changelog/v2.3.3",
					},
					{
						text: "v2.3.0",
						link: "/changelog/v2.3.0",
					},
					{
						text: "v2.2.0",
						link: "/changelog/v2.2.0",
					},
					{
						text: "v2.1.0",
						link: "/changelog/v2.1.0",
					},
				],
			},
		],
	},
];
