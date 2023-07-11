module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  transformer: {
    enabled: true,
    config: {
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 5, // Default is 5
    },
  },
  seo: {
    enabled: true,
  },
  email: {
	config: {
		provider: 'sendmail',
		settings: {
			defaultFrom: 'sven@sailsnake.com',
			defaultReplyTo: 'sven@sailsnake.com'
		}
	}
  },
  ezforms:{
    config:{
      captchaProvider: {
        name: 'none',
      },
      notificationProviders: []
    }
}
});
