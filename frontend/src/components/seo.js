// import { getStrapiMedia } from "../../lib/media";
// import { NextSeo } from "next-seo";
// import PropTypes from "prop-types";

// const Seo = ({ seo, global }) => {
//    // Prevent errors if no metadata was set
//    if (!seo) return null

//   return (
//     <NextSeo
//       title={seo?.attributes?.seo?.title ? seo.attributes.seo.title : seo?.seo?.title}
//       description={seo?.attributes?.seo?.description ? seo.attributes.seo.description : seo?.seo?.description}
//       canonical="https://thetrucksbuses.com/"
//       openGraph={{
//         url: "https://thetrucksbuses.com/",
//         title: seo?.attributes?.seo?.title ? seo.attributes.seo.title : seo?.seo?.title,
//         description: seo?.attributes?.seo?.description ? seo.attributes.seo.description : seo?.seo?.description,
//         images: [
//           {
//             url: getStrapiMedia(
//               seo?.attributes?.seo?.shareImage?.data?.attributes?.formats?.thumbnail //if thumbnail available
//               ? seo.attributes.seo.shareImage.data.attributes.formats.thumbnail
//               : seo?.seo?.shareImage?.data?.attributes?.formats?.thumbnail
//                 ? seo.seo.shareImage.data.attributes.formats.thumbnail
//                 : seo?.attributes?.seo?.shareImage?.data?.attributes  //if image formats not available
//                   ? seo.attributes.seo.shareImage.data.attributes
//                   : seo?.seo?.shareImage?.data?.attributes
//               ),
//           },
//         ],
//         site_name: "https://thetrucksbuses.com/",
//       }}
//       structureData={global?.attributes?.structureData ? global.attributes.structureData : {}}
//       keywords={seo?.attributes?.seo?.keywords ? seo.attributes.seo.keywords : seo?.seo?.keywords}
//     />
//   );
// };

// Seo.propTypes = {
// 	seo: PropTypes.shape({
// 	  title: PropTypes.string.isRequired,
// 	  description: PropTypes.string.isRequired,
// 	  shareImage: PropTypes.string.isRequired,
// 	}),
//   }

// export default Seo;
