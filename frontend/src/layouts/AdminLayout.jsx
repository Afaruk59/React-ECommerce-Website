import React from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  RollbackOutlined,
  BarcodeOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Sider, Header, Content, Footer } = Layout;

function AdminLayout({ children }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const items = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      path: "/admin",
      onClick: () => {
        navigate(`/admin`);
      },
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Kategoriler",
      path: "/admin/categories",
      children: [
        {
          key: "3",
          label: "Kategori Listesi",
          path: "/admin/categories",
          onClick: () => {
            navigate(`/admin/categories`);
          },
        },
        {
          key: "4",
          label: "Yeni Kategori Oluştur",
          path: "/admin/categories/create",
          onClick: () => {
            navigate("/admin/categories/create");
          },
        },
      ],
    },
    {
      key: "5",
      icon: <LaptopOutlined />,
      label: "Ürünler",
      path: "/",
      children: [
        {
          key: "6",
          label: "Ürün Listesi",
          path: "/admin/products",
          onClick: () => {
            navigate(`/admin/products`);
          },
        },
        {
          key: "7",
          label: "Yeni Ürün Oluştur",
          path: "/admin/products/create",
          onClick: () => {
            navigate("/admin/products/create");
          },
        },
      ],
    },
    {
      key: "8",
      icon: <BarcodeOutlined />,
      label: "Kuponlar",
      children: [
        {
          key: "9",
          label: "Kupon Listesi",
          path: "/admin/coupons",
          onClick: () => {
            navigate(`/admin/coupons`);
          },
        },
        {
          key: "10",
          label: "Yeni Kupon Oluştur",
          path: "/admin/coupons/create",
          onClick: () => {
            navigate("/admin/coupons/create");
          },
        },
      ],
    },
    {
      key: "11",
      icon: <EditOutlined />,
      label: "Bloglar",
      path: "/admin/blogs",
      children: [
        {
          key: "12",
          label: "Blog Listesi",
          path: "/admin/blogs",
          onClick: () => {
            navigate(`/admin/blogs`);
          },
        },
        {
          key: "13",
          label: "Yeni Blog Oluştur",
          path: "/admin/blogs/create",
          onClick: () => {
            navigate("/admin/blogs/create");
          },
        },
      ],
    },
    {
      key: "14",
      icon: <UserOutlined />,
      label: "Kullanıcı Listesi",
      path: "/admin/users",
      onClick: () => {
        navigate(`/admin/users`);
      },
    },
    {
      key: "15",
      icon: <ShoppingCartOutlined />,
      label: "Siparişler",
      path: "/admin/orders",
      onClick: () => {
        navigate(`/admin/orders`);
      },
    },
    {
      key: "16",
      icon: <RollbackOutlined />,
      label: "Ana Sayfaya Git",
      onClick: () => {
        window.location.href = "/";
      },
    },
  ];

  const getTitle = () => {
    const path = window.location.pathname;

    for (const item of items) {
      if (item.path === path) {
        return item.label;
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.path === path) {
            return child.label;
          }
        }
      }
    }
    return "Admin Panel";
  };

  const getActiveKey = () => {
    const path = window.location.pathname;

    for (const item of items) {
      if (item.path === path) {
        return item.key;
      }
      if (item.children) {
        for (const child of item.children) {
          if (child.path === path) {
            return child.key;
          }
        }
      }
    }

    return "1";
  };

  if (user.role == "admin") {
    return (
      <div className="admin-layout">
        <Layout>
          <Sider
            theme="dark"
            width={200}
            style={{
              position: "fixed",
              height: "100vh",
              left: 0,
              top: 0,
              bottom: 0,
              zIndex: 1000,
            }}
          >
            <Menu
              mode="vertical"
              style={{ height: "100vh" }}
              items={items}
              selectedKeys={[getActiveKey()]}
            />
          </Sider>
          <Layout style={{ marginLeft: 200, minHeight: "100vh" }}>
            <Header>
              <div>
                <h2 style={{ color: "white" }}>{getTitle()}</h2>
              </div>
            </Header>
            <Content>
              <div style={{ padding: "50px" }}>{children}</div>
            </Content>
            <Footer>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <p>Footer</p>
              </div>
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  } else {
    return (window.location.href = "/");
  }
}

export default AdminLayout;
