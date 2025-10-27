module.exports = (req, res) => {
  console.log('✅ API被调用！');
  return res.json({ 
    success: true, 
    message: 'API终于工作了！',
    timestamp: new Date().toISOString()
  });
};
