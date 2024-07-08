/** @format */

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Table, Button, Modal, Form, Input } from "antd";
import axios from "axios";
import { toast } from "sonner";
import { Popconfirm } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

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
      // <Button onClick={() => handleDelete(record._id)}>Delete</Button>
      <Popconfirm
        placement="rightTop"
        title="Confirm Deletion"
        description="Are you sure you want to delete this tags?"
        okText="Delete"
        cancelText="Cancel"
        onConfirm={() => handleDelete(record._id)}
        icon={
          <QuestionCircleOutlined
            style={{
              color: "red",
            }}
          />
        }
      >
        <Button danger>Delete</Button>
      </Popconfirm>
    ),
  },
];

const MenuPageMetaTag = () => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [isCreatingNew, setIsCreatingNew] = useState(false);
  const [form] = Form.useForm();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/joyu/metatag`
      );
      const MenuTag = response.data.data.filter(
        (tag) => tag.page === "MenuPage"
      );
      setData(MenuTag);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const handleEdit = (record) => {
    setEditingItem({ ...record });
    setIsModalVisible(true);
    setIsCreatingNew(false);
    form.setFieldsValue(record);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/joyu/metatag/${id}`
      );
      const newData = data.filter((item) => item._id !== id);
      setData(newData);
      toast.success("Deletion successful");
    } catch (error) {
      toast.error("Deletion failed: " + error.message);
    }
  };

  const handleAddNew = () => {
    setEditingItem({ title: "", name: "", content: "", page: "MenuPage" });
    setIsModalVisible(true);
    setIsCreatingNew(true);
    form.resetFields();
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setIsModalVisible(false);

      if (isCreatingNew) {
        try {
          await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/joyu/metatag/`,
            { ...values, page: "MenuPage" }
          );
          fetchData();
          toast.success("MetaTag added successfully");
        } catch (error) {
          toast.error("Failed to add MetaTag: " + error.message);
        }
      } else {
        if (editingItem) {
          try {
            await axios.put(
              `${process.env.REACT_APP_SERVER_URL}/joyu/metatag/${editingItem._id}`,
              values
            );
            fetchData();
            toast.success("Update successful");
          } catch (error) {
            toast.error("Update failed: " + error.message);
          }
        }
      }
    } catch (error) {
      // Handle validation errors
      console.error("Validation errors:", error);
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
        <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input the title!" }]}
          >
            <Input
              name="title"
              value={editingItem?.title}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input
              name="name"
              value={editingItem?.name}
              onChange={handleChange}
            />
          </Form.Item>
          <Form.Item
            label="Content"
            name="content"
            rules={[{ required: true, message: "Please input the content!" }]}
          >
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
