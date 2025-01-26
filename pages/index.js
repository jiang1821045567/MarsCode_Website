// 引入必要的库
import React from 'react';

// 定义导航栏组件
function Navbar() {
  const navbarStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const ulStyle = {
    listStyleType: 'none',
    margin: '0',
    padding: '0',
    display: 'flex',
  };

  const liStyle = {
    marginRight: '20px',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <h1>口袋AI</h1>
      </div>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <a href="#" style={linkStyle}>首页</a>
        </li>
        <li style={liStyle}>
          <a href="#" style={linkStyle}>功能</a>
        </li>
        <li style={liStyle}>
          <a href="#" style={linkStyle}>关于我们</a>
        </li>
        <li style={liStyle}>
          <a href="#" style={linkStyle}>联系我们</a>
        </li>
      </ul>
    </nav>
  );
}

// 定义 Hero 区域组件
function Hero() {
  const heroStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    textAlign: 'center',
    padding: '100px 0',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: '#007BFF',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={heroStyle}>
      <h1>将世界知识装进口袋</h1>
      <p>口袋AI，随时随地为您提供丰富的知识和智能服务。</p>
      <button style={buttonStyle}>立即体验</button>
    </div>
  );
}

// 定义特性展示区域组件
function Features() {
  const featuresStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '50px 0',
  };

  const featureStyle = {
    textAlign: 'center',
    width: '200px',
  };

  const iconStyle = {
    fontSize: '40px',
    color: '#007BFF',
    marginBottom: '20px',
  };

  return (
    <div style={featuresStyle}>
      <div style={featureStyle}>
        <i className="fas fa-comments" style={iconStyle}></i>
        <h3>基于中文模型优化的中文对话体验</h3>
        <p>我们的模型针对中文进行了优化，提供更自然、流畅的对话体验。</p>
      </div>
      <div style={featureStyle}>
        <i className="fas fa-user-friends" style={iconStyle}></i>
        <h3>针对中文用户优化的交互界面</h3>
        <p>交互界面设计符合中文用户的使用习惯，操作更便捷。</p>
      </div>
      <div style={featureStyle}>
        <i className="fas fa-wifi" style={iconStyle}></i>
        <h3>智能网络错误处理与重试机制</h3>
        <p>遇到网络问题时，自动处理错误并尝试重新连接，确保服务的稳定性。</p>
      </div>
      <div style={featureStyle}>
        <i className="fas fa-cogs" style={iconStyle}></i>
        <h3>更适合中国用户的功能定制</h3>
        <p>根据中国用户的需求和习惯，定制了一系列实用的功能。</p>
      </div>
    </div>
  );
}

// 定义开发者和社区信息区域组件
function DeveloperCommunity() {
  const developerCommunityStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '50px 0',
  };

  const developerStyle = {
    textAlign: 'center',
    width: '300px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
  };

  const communityStyle = {
    ...developerStyle,
  };

  const linkStyle = {
    color: '#007BFF',
    textDecoration: 'none',
  };

  return (
    <div style={developerCommunityStyle}>
      <div style={developerStyle}>
        <h3>开发者</h3>
        <p>云中江树</p>
      </div>
      <div style={communityStyle}>
        <h3>LangGPT提示词社区</h3>
        <p>加入我们的社区，获取更多提示词和资源。</p>
        <a href="https://langgpt.cn/" target="_blank" style={linkStyle}>点击进入社区</a>
      </div>
      <div style={developerStyle}>
        <h3>联系方式</h3>
        <p>微信：[微信号]<br />GitHub：[GitHub链接]<br />邮箱：[邮箱地址]</p>
      </div>
    </div>
  );
}

// 定义版本信息展示区域组件
function VersionInfo() {
  const versionInfoStyle = {
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#f0f8ff',
  };

  return (
    <div style={versionInfoStyle}>
      <p>版本：1.0</p>
    </div>
  );
}

// 定义下载引导区域组件
function DownloadCta() {
  const downloadCtaStyle = {
    textAlign: 'center',
    padding: '50px 0',
  };

  const buttonStyle = {
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  };

  return (
    <div style={downloadCtaStyle}>
      <h2>立即下载口袋AI</h2>
      <button style={buttonStyle}>下载</button>
    </div>
  );
}

// 定义页脚组件
function Footer() {
  const footerStyle = {
    textAlign: 'center',
    padding: '20px 0',
    backgroundColor: '#007BFF',
    color: 'white',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 口袋AI. 保留所有权利。</p>
    </footer>
  );
}

// 定义主应用组件
export default function MyApp() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <DeveloperCommunity />
      <VersionInfo />
      <DownloadCta />
      <Footer />
    </div>
  );
}