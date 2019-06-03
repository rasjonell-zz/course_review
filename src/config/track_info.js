const titles = {
  art: 'Arts & Humanities',
  social: 'Social Sciences',
  quantative: 'Quantative Sciences'
};

export default track => ({
  title: titles[track],
  label: track[0].toUpperCase(),
  image: `${process.env.PUBLIC_URL}/images/${track}.jpg`
});
