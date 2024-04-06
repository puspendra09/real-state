// const fs = require('fs');
// const prettier = require('prettier');
// const moment = require('moment');

// (async () => {
//   const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
//   let modDate = moment(new Date()).format('YYYY-MM-DD')

//   const localRoutes = [
//       '/index',
//       '/find',
//       '/compare',
//       '/articles',
//       '/about-us',
//       '/advertise',
//       '/contact-us',
//       '/feedback',
//       '/privacy-policy',
//       '/terms-and-conditions',
//     ];
  
//   //Find page having single filter routes starts here>>>>>>
//   const resBodyTypes = await fetch(
//     `${
//       process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
//     }/api/body-types?status=published&_publicationState=live&populate=*`
//   ); 
// 	const bodyTypes = await resBodyTypes.json();
// 	const bodyTypeRoutes =
// 		bodyTypes && bodyTypes.data
// 			? bodyTypes.data.map(
// 					(bodyType) => `/find?bodyTypes=${bodyType.attributes.slug}`
// 			  )
// 			: [];

//   const resPriceRange = await fetch(
//     `${
//       process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
//     }/api/price-ranges?sort=upperRange&status=published&_publicationState=live&populate=*`
//   );
//   const priceRange = await resPriceRange.json();
//   const priceRangeRoutes =
//     priceRange && priceRange.data
//       ? priceRange.data.map(
//           (priceRange) =>
//             `/find?Price-Range=${priceRange.attributes.slug}`
//         )
//       : [];

//   const resBrands = await fetch(
//     `${
//       process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
//     }/api/brands?status=published&_publicationState=live&populate=*`
//   );
//   const brands = await resBrands.json();
//   const brandRoutes =
//   brands && brands.data
//       ? brands.data.map(
//           (brand) => `/find?Brands=${brand.attributes.slug}`
//         )
//       : [];

// 	const resFuelTypes = await fetch(
// 		`${
// 			process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
// 		}/api/fuel-types?status=published&_publicationState=live&populate=*`
// 	);
// 	const fuelTypes = await resFuelTypes.json();
// 	const fuelRoutes =
//   fuelTypes && fuelTypes.data
// 			? fuelTypes.data.map(
// 					(fuel) => `/find?Fuel-Type=${fuel.attributes.slug}`
// 			  )
// 			: [];
  
//   const resGvws = await fetch(
//     `${
//       process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
//     }/api/gvws?status=published&_publicationState=live&populate=*`
//   );
//   const gvws = await resGvws.json();
//   const gvwRoutes =
//   gvws && gvws.data
//       ? gvws.data.map(
//           (gvw) => `/find?GVW=${gvw.attributes.slug}`
//         )
//       : [];

//   const resEmissionNorms = await fetch(
//     `${
//       process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
//     }/api/emission-norms?status=published&_publicationState=live&populate=*`
//   );
//   const emissionNorms = await resEmissionNorms.json();
//   const emissionNormRoutes =
//   emissionNorms && emissionNorms.data
//       ? emissionNorms.data.map(
//           (emissionNorm) => `/find?Emission-Norms=${emissionNorm.attributes.slug}`
//         )
//       : [];

//   const resTyres = await fetch(
//     `${
//       process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
//     }/api/tyres?status=published&_publicationState=live&populate=*`
//   );
//   const tyres = await resTyres.json();
//   const tyreRoutes =
//   tyres && tyres.data
//       ? tyres.data.map(
//           (tyre) => `/find?Number-of-Tyre=${tyre.attributes.slug}`
//         )
//       : [];

//   //Find page having single filter routes ends here>>>>>>

// 	const resArticle = await fetch(
// 		`${
// 			process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
// 		}/api/articles?status=published&_publicationState=live&populate=*`
// 	);
// 	const articles = await resArticle.json();
// 	const articleRoutes =
// 		articles && articles.data
// 			? articles.data.map(
// 					(article) => `/article/${article.attributes.slug}`
// 			  )
// 			: [];

// 	const resModel = await fetch(
// 		`${
// 			process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
// 		}/api/models?_publicationState=live&populate=*`
// 	);
// 	const models = await resModel.json();
// 	const modelRoutes = models.data?.data.map(
// 		(model) =>
// 			`/${
// 				model.attributes.body_type && model.attributes.body_type?.data
// 					? model.attributes.body_type.data.attributes.slug
// 					: "truck"
// 			}/${
// 				model.attributes.brand.data !== null
// 					? model.attributes.brand.data.attributes.slug
// 					: "mahindra"
// 			}/${model.attributes.slug}`
// 	);

//   let comparisonSlugs = models.data?.data.map((model) =>
//   {return `${model.attributes.brand?.data 
//             ? model.attributes.brand?.data?.attributes?.slug
//             : "mahindra"}_${model.attributes.slug}_
//           ${model.attributes?.variants?.data.length
//             ? model.attributes?.variants?.data[0]?.attributes?.slug
//             : ""}`
//   });

//   let allComparisonRoutes = [];
//   for (let i = 0; i < comparisonSlugs.length - 1; i++) {
//     for (let j = i + 1; j < comparisonSlugs.length; j++) {
//       allComparisonRoutes.push(`/compare/${comparisonSlugs[i]}-vs-${comparisonSlugs[j]}`);
//     }
//   }
  

//   //popular comparison routes starts here
// 	const resComparison = await fetch(
// 		`${
// 			process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1338"
// 		}/api/filter-models`
// 	);
// 	const comparisons = await resComparison.json();
// 	let allPopularComparisonRoutes = [];
// 	const comparisonRoutes = comparisons.length
// 		? comparisons.map((bodytypecomparison) => {
// 				const comparisons = bodytypecomparison.comparisons.map(
// 					(singleComparison) =>
// 						`/compare/${singleComparison[0].brand.slug}_${singleComparison[0].slug}_${singleComparison[0].variants[0].slug}-vs-${singleComparison[1].brand.slug}_${singleComparison[1].slug}_${singleComparison[1].variants[0].slug}`
// 				);
// 				allPopularComparisonRoutes = [...allPopularComparisonRoutes, ...comparisons];
// 		  })
// 		: [];

  
// 	const allSitemapRoutes = [
// 		{"sitemap": localRoutes}, //always keep at 0 index to avoid it being added to sitemap indices
// 		{"sitemap-articles": articleRoutes},
// 		{"sitemap-models": modelRoutes},
// 		{"sitemap-body-types": bodyTypeRoutes},
// 		{"sitemap-price-ranges": priceRangeRoutes},
//     {"sitemap-brands": brandRoutes},
//     {"sitemap-fuel-types": fuelRoutes},
//     {"sitemap-gvws": gvwRoutes},
//     {"sitemap-emission-norms": emissionNormRoutes},
//     {"sitemap-tyres": tyreRoutes},
//     {"sitemap-allPopularComparisonRoutes": allPopularComparisonRoutes},
//     {"sitemap-all-comparisons": allComparisonRoutes},
// 	];

//   const allSitemaps = allSitemapRoutes.map((sitemap) => `/${Object.keys(sitemap)[0]}.xml`)
//   let sitemapIndices = [...allSitemaps]
//   sitemapIndices.shift()
//   const pages = allSitemapRoutes.map((sitemap) => Object.values(sitemap)[0])

//   const sitemapGenerator = (route) => {
//     return `<?xml version="1.0" encoding="UTF-8"?>
//               <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
//                   ${route
//                     .map((page) => {
//                       const path = page
//                         .replace('pages', '')
//                         .replace('.js', '')
//                         .replace('.mdx', '');
//                       const route = path === '/index' ? '' : path;
//                       return `
//                               <url>
//                                   <loc>${`https://thetrucksbuses.com${route}`}</loc>
//                                   <lastmod>${modDate}</lastmod>
//                                   <changefreq>${
//                                     route.includes("/find") || route === ""
//                                       ? "daily"
//                                       : "weekly"
//                                   }</changefreq>
//                                   <priority>0.7</priority>
//                               </url>
//                           `;
//                     })
//                     .join('')}
//               </urlset>`
//   };
  
//   for([index, routes] of pages.entries()){
//     if(index === 0){
//       const formatted = prettier.format(sitemapGenerator([...routes, ...sitemapIndices]), {
//         ...prettierConfig,
//         parser: 'html'
//       });
//       fs.writeFileSync(`public/${allSitemaps[index]}`, formatted);
//     }else{
//       const formatted = prettier.format(sitemapGenerator(routes), {
//         ...prettierConfig,
//         parser: 'html'
//       });
//       fs.writeFileSync(`public/${allSitemaps[index]}`, formatted);
//     }
//     }  
// })();