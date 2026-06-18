// Edit this file to add/update papers, then run: node build.js
// For new images: sips -Z 480 images/foo.png --out images/foo.jpg --setProperty format jpeg --setProperty formatOptions 85

const publicationImageSize = 160;

const publications = [
  {
    img: 'images/deploy1.jpg',
    imgHover: 'images/deploy2.jpg',
    imgCrop: { top: 0, right: 40, bottom: 0, left: 2 },
    title: 'Seeing Where to Deploy: Metric RGB-Based Traversability Analysis for Aerial-to-Ground Hidden Space Inspection',
    titleLink: 'title link url',
    authors: '<strong>Seoyoung Lee</strong>, Shaekh Mohammad Shithil, Durgakant Pushp, Lantao Liu, Zhangyang Wang',
    venue: 'IROS',
    year: '2026',
    links: [],
  },
  {
    img: 'images/cipher1.jpg',
    imgHover: 'images/cipher2.jpg',
    imgCropHover: { top: 20, right: 22, bottom: 20, left: 28 },
    title: 'CIPHER: Culvert Inspection through Pairwise Frame Selection and High-Efficiency Reconstruction',
    titleLink: 'https://arxiv.org/abs/2603.14150',
    authors: '<strong>Seoyoung Lee</strong>, Zhangyang Wang',
    venue: 'ICCVW E2E3D',
    year: '2025',
    links: [
      { label: 'paper', url: 'https://arxiv.org/abs/2603.14150' },
    ],
  },
  {
    img: 'images/S2H1.jpg',
    imgHover: 'images/S2H2.jpg',
    title: 'Joint Object Detection and Sound Source Separation',
    titleLink: 'http://www.joonseok.net/papers/ismir25_s2h.pdf',
    authors: 'Sunyoo Kim, Yunjeong Choi, Doyeon Lee, <strong>Seoyoung Lee</strong>, Eunyi Lyoo, Seungju Kim, Junhyug Noh, Joonseok Lee',
    venue: 'ISMIR',
    year: '2025',
    links: [
      { label: 'paper', url: 'http://www.joonseok.net/papers/ismir25_s2h.pdf' },
    ],
  },
  {
    img: 'images/eva1.jpg',
    imgHover: 'images/eva2.jpg',
    title: 'Expressive Gaussian Human Avatars from Monocular RGB Video',
    titleLink: 'https://evahuman.github.io/',
    authors: 'Hezhen Hu, Zhiwen Fan, Tianhao Wu, Yihan Xi, Seoyoung Lee, Georgios Pavlakos, Zhangyang Wang',
    venue: 'NeurIPS',
    year: '2024',
    links: [
      { label: 'project page', url: 'https://evahuman.github.io/' },
      { label: 'paper', url: 'https://arxiv.org/abs/2407.03204' },
      { label: 'code', url: 'https://github.com/evahuman/EVA' },
    ],
  },
  {
    img: 'images/posediff_pose-conditioning.jpg',
    imgHover: 'images/posediff_results.jpg',
    title: 'PoseDiff: Pose-conditioned Diffusion Model for Unbounded Scene Synthesis from Sparse Inputs',
    titleLink: 'https://openaccess.thecvf.com/content/WACV2024/papers/Lee_PoseDiff_Pose-Conditioned_Multimodal_Diffusion_Model_for_Unbounded_Scene_Synthesis_From_WACV_2024_paper.pdf',
    authors: '<strong>Seoyoung Lee</strong>, Joonseok Lee',
    venue: 'WACV',
    year: '2024',
    links: [
      { label: 'paper', url: 'https://openaccess.thecvf.com/content/WACV2024/papers/Lee_PoseDiff_Pose-Conditioned_Multimodal_Diffusion_Model_for_Unbounded_Scene_Synthesis_From_WACV_2024_paper.pdf' },
    ],
  },
  {
    img: 'images/dadnerf_model.jpg',
    imgHover: 'images/dadnerf_heatmap.jpg',
    title: 'Disentangled Audio-Driven NeRF: Talking Head Generation with Detailed Identity-Specific Micro expressions',
    titleLink: 'https://sightsound.org/',
    authors: '<strong>Seoyoung Lee*</strong>, Seongsu Ha*, Joonseok Lee',
    venue: 'CVPR Workshops: Sight and Sound',
    year: '2023',
    links: [
      { label: 'paper', url: 'https://sightsound.org/' },
    ],
  },
  {
    img: 'images/learning_to_wear1.jpg',
    imgHover: 'images/learning_to_wear2.jpg',
    title: 'Learning to Wear: Details-Preserved Virtual Try-on via Disentangling Clothes and Wearer',
    titleLink: 'https://www.bmvc2022.org/programme/papers/#:~:text=272.%20Learning%20to,Seoul%20National%20University)*',
    authors: 'Sangho Lee, <strong>Seoyoung Lee</strong>, Joonseok Lee',
    venue: 'BMVC',
    year: '2022',
    links: [
      { label: 'project page', url: 'https://bmvc2022.mpi-inf.mpg.de/272/' },
      { label: 'paper', url: 'https://bmvc2022.mpi-inf.mpg.de/0272.pdf' },
    ],
  },
  {
    img: 'images/cfnsg1.jpg',
    imgHover: 'images/cfnsg2.jpg',
    title: 'Towards Efficient Neural Scene Graphs by Learning Consistency Fields',
    titleLink: 'https://www.bmvc2022.org/programme/papers/#:~:text=302.%20Towards%20Efficient%20Neural,Research%20%26%20Seoul%20National%20University)',
    authors: 'Yeji Song, Chaerin Kong, <strong>Seoyoung Lee</strong>, Nojun Kwak, Joonseok Lee',
    venue: 'BMVC',
    year: '2022',
    links: [
      { label: 'project page', url: 'https://bmvc2022.mpi-inf.mpg.de/302/' },
      { label: 'paper', url: 'https://bmvc2022.mpi-inf.mpg.de/0302.pdf' },
      { label: 'code', url: 'https://github.com/ldynx/CF-NSG' },
    ],
  },
  {
    img: 'images/dpvton2.jpg',
    imgHover: 'images/dpvton1.jpg',
    title: 'Towards Detailed Characteristic-Preserving Virtual Try-On',
    titleLink: 'https://openaccess.thecvf.com/content/CVPR2022W/CVFAD/html/Lee_Towards_Detailed_Characteristic-Preserving_Virtual_Try-On_CVPRW_2022_paper.html',
    authors: 'Sangho Lee*, <strong>Seoyoung Lee*</strong>, Joonseok Lee',
    venue: 'CVPR Workshops: The 5th Workshop on Computer Vision for Fashion, Art, and Design',
    year: '2022',
    award: '<font color=#FF8080><strong>(Oral Presentation)</strong></font>',
    links: [
      { label: 'paper', url: 'https://openaccess.thecvf.com/content/CVPR2022W/CVFAD/html/Lee_Towards_Detailed_Characteristic-Preserving_Virtual_Try-On_CVPRW_2022_paper.html' },
      { label: 'video', url: 'https://drive.google.com/file/d/1R1hNksLg4KPYQib6bQ6qix11O7NYVgi2/view?usp=sharing' },
    ],
  },
  {
    img: 'images/meta_analysis_forest_plot.jpg',
    imgHover: 'images/meta_analysis_scatterplot.jpg',
    title: 'Meta-Analysis of Randomized Clinical Trials Evaluating Effectiveness of a Multivitamin Supplementation against Oxidative Stress in Healthy Subjects',
    titleLink: 'https://www.mdpi.com/2072-6643/14/6/1170',
    authors: '<strong>Seoyoung Lee*</strong>, Iksoo Huh*, Seunghee Kang, Yea-eun Nam, Youngseo Cho, Md Kamruzzaman, Jina Hong, Oran Kwon, Taesung Park',
    venue: 'Nutrients',
    year: '2022',
    award: '<font color=#FF8080><strong>(Issue Cover)</strong></font>',
    links: [
      { label: 'paper', url: 'https://www.mdpi.com/2072-6643/14/6/1170' },
    ],
  },
];

function parseCrop(crop) {
  if (typeof crop === 'string') {
    var parts = crop.trim().split(/\s+/);
    return {
      top: parts[0] || 0,
      right: parts[1] || 0,
      bottom: parts[2] || 0,
      left: parts[3] || 0,
    };
  }
  return crop;
}

function cropToPx(value) {
  if (value == null || value === 0 || value === '0') return 0;
  if (typeof value === 'number') return value;
  return parseFloat(value) || 0;
}

function getViewportStyle(crop, zoom, imgSize) {
  if (!crop && !zoom) return '';
  var top = 0;
  var right = 0;
  var bottom = 0;
  var left = 0;
  if (crop) {
    var c = parseCrop(crop);
    top = cropToPx(c.top);
    right = cropToPx(c.right);
    bottom = cropToPx(c.bottom);
    left = cropToPx(c.left);
  }
  var visW = Math.max(1, imgSize - left - right);
  var visH = Math.max(1, imgSize - top - bottom);
  var hasCrop = top || right || bottom || left;
  var fillScale = hasCrop ? Math.max(imgSize / visW, imgSize / visH) : 1;
  return ' style="' + [
    '--crop-top-ratio:' + (top / imgSize),
    '--crop-right-ratio:' + (right / imgSize),
    '--crop-bottom-ratio:' + (bottom / imgSize),
    '--crop-left-ratio:' + (left / imgSize),
    '--shift-x-ratio:' + ((right - left) / 2 / imgSize),
    '--shift-y-ratio:' + ((bottom - top) / 2 / imgSize),
    '--scale:' + (fillScale * (zoom || 1)),
  ].join(';') + '"';
}

function getPublicationContainerStyle(paper) {
  var imgSize = paper.imgSize || publicationImageSize;
  return ' style="--pub-img-size:' + imgSize + 'px"';
}

function renderPublicationsHtml() {
  return publications.map(function (paper) {
    var linksHtml = paper.links.map(function (link) {
      return '<a href="' + link.url + '">' + link.label + '</a>';
    }).join(' / ');

    var awardHtml = paper.award ? ' &nbsp; ' + paper.award : '';
    var imgSize = paper.imgSize || publicationImageSize;
    var containerStyle = getPublicationContainerStyle(paper);
    var baseCropStyle = getViewportStyle(paper.imgCrop, paper.imgZoom, imgSize);
    var hoverCropStyle = getViewportStyle(paper.imgCropHover, paper.imgZoomHover, imgSize);

    return (
      '          <tr>\n' +
      '            <td style="padding:20px;width:25%;vertical-align:middle">\n' +
      '              <div class="one"' + containerStyle + ' data-hover-src="' + paper.imgHover + '">\n' +
      '                <div class="two"><div class="pub-img-viewport"' + hoverCropStyle + '><div class="pub-img-stage"><img class="pub-img pub-img-hover" alt="" width="' + imgSize + '" height="' + imgSize + '"></div></div></div>\n' +
      '                <div class="pub-img-viewport pub-img-viewport-base"' + baseCropStyle + '><div class="pub-img-stage"><img class="pub-img" src="' + paper.img + '" alt="" width="' + imgSize + '" height="' + imgSize + '" loading="lazy" decoding="async"></div></div>\n' +
      '              </div>\n' +
      '            </td>\n' +
      '            <td style="padding:20px;width:75%;vertical-align:middle">\n' +
      '              <a href="' + paper.titleLink + '"><papertitle>' + paper.title + '</papertitle></a><br>\n' +
      '              ' + paper.authors + '<br>\n' +
      '              <em>' + paper.venue + '</em>, ' + paper.year + awardHtml + '<br>\n' +
      (linksHtml ? '              ' + linksHtml + '\n' : '') +
      '            </td>\n' +
      '          </tr>'
    );
  }).join('\n');
}

module.exports = { publications, renderPublicationsHtml };
