/** @format */

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Table, Button, Modal, Form, Input } from "antd";
import axios from "axios";

const columns = (handleEdit, handleDelete) => [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Content",
    dataIndex: "content",
    key: "content",
  },
  {
    title: "Edit",
    key: "edit",
    render: (_, record) => (
      <Button onClick={() => handleEdit(record)}>Edit</Button>
    ),
  },
  {
    title: "Delete",
    key: "delete",
    render: (_, record) => (
      <Button onClick={() => handleDelete(record._id)}>Delete</Button>
    ),
  },
];

const MenuPageMetaTag = () => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/joyu/metatag`);
      const MenuTag = response.data.data.filter((tag)=>tag.page ==="MenuPage")
      setData(MenuTag);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  const handleEdit = (record) => {
    setEditingItem({ ...record });
    setIsModalVisible(true);
    setIsCreatingNew(false);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.REACT_APP_SERVER_URL}/joyu/metatag/${id}`);
      const newData = data.filter((item) => item._id !== id);
      setData(newData);
      alert("Deletion successful");
    } catch (error) {
      alert("Deletion failed: " + error.message);
    }
  };

  const handleAddNew = () => {
    setEditingItem({ title: "", name: "", content: "", page:"MenuPage" });
    setIsModalVisible(true);
    setIsCreatingNew(true);
  };

  const handleOk = async () => {
    setIsModalVisible(false);
    if (isCreatingNew) {
      try {
        const response = await axios.post(
         `${process.env.REACT_APP_SERVER_URL}/joyu/metatag/`,
          editingItem
        );
        fetchData();
        alert("MetaTag added successfully");
      } catch (error) {
        alert("Failed to add MetaTag: " + error.message);
      }
    } else {
      if (editingItem) {
        try {
          await axios.put(
            `${process.env.REACT_APP_SERVER_URL}/joyu/metatag/${editingItem._id}`,
            editingItem
          );
          fetchData();
          alert("Update successful");
        } catch (error) {
          alert("Update failed: " + error.message);
        }
      }
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingItem((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full h-fit">
      <Helmet>
        <title>Menu Page</title>
        <meta
          name="description"
          content="Home page with dynamic data from API"
        />
      </Helmet>
      <Button
        type="primary"
        onClick={handleAddNew}
        style={{ marginBottom: 16 }}
      >
        Add New MetaTag
      </Button>
      <Table columns={columns(handleEdit, handleDelete)} dataSource={data} />
      <Modal
        title={isCreatingNew ? "Add New MetaTag" : "Edit MetaTag"}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item label="Title">
            <Input
              name="title"
              value={editingItem?.title}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Name">
            <Input
              name="name"
              value={editingItem?.name}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item label="Content">
            <Input
              name="content"
              value={editingItem?.content}
              onChange={handleChange}
            />
          </Form.Item>
          {/* <Form.Item label="Page">
            <Input
              name="page"
              value={editingItem?.page}
              onChange={handleChange}
            />
          </Form.Item> */}
        </Form>
      </Modal>
    </div>
  );
};

export default MenuPageMetaTag;
