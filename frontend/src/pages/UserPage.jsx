import React from "react";
import { Row, Card, Col, Button } from "antd";

function UserInfos() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div
      style={{
        padding: "50px",
        height: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        hoverable
        style={{ width: "50%" }}
        title={user.username}
        actions={[
          <Button
            type="primary"
            onClick={() => (window.location.href = "/admin")}
          >
            {user.role === "admin" ? "Go to Dashboard" : "Go to Home"}
          </Button>,
          <Button type="primary" danger onClick={handleLogout}>
            Logout
          </Button>,
        ]}
      >
        <Row justify="center" align="middle" gutter={16}>
          <Col span={12}>
            <img
              style={{
                borderRadius: "50%",
              }}
              src={user.avatar}
              alt="avatar"
            />
          </Col>
          <Col span={12}>
            <h3>{user.email}</h3>
            <p>Role: {user.role === "admin" ? "Admin" : "User"}</p>
            <p>Created At: {new Date(user.createdAt).toLocaleString()}</p>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default UserInfos;
