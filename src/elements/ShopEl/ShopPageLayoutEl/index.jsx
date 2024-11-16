"use client"
import React, { useState } from "react";
import { FilterOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Checkbox } from "antd";
import ShopDrawerEl from "../ShopDrawerEl";
import ShCaHawanSamagiriEl from "@/elements/ShopPageCategories/ShCaHawanSamagriEl";
import ShCaFlowersEl from "@/elements/ShopPageCategories/ShCaFlowersEl";
import ShCaFruitsEl from "@/elements/ShopPageCategories/ShCaFruitsEl";
import ShCaGiftEl from "@/elements/ShopPageCategories/ShCaGiftEl";

const ShopPageLayoutEl = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [sortOption, setSortOption] = useState("Relevance");

  const categories = [
    { id: 1, name: "Hawan Samagiri", component: <ShCaHawanSamagiriEl /> },
    { id: 2, name: "Flowers", component: <ShCaFlowersEl /> },
    { id: 3, name: "Fruits", component: <ShCaFruitsEl /> },
    { id: 4, name: "Gifts", component: <ShCaGiftEl /> },
  ];

  const sortOptions = [
    "Relevance",
    "New Arrivals",
    "Price (High to Low)",
    "Price (Low to High)",
  ];

  const handleSortChange = ({ key }) => {
    setSortOption(key);
  };

  const handleCheckboxChange = (categoryId, checked) => {
    if (checked) {
      setSelectedFilters((prevFilters) => [
        ...prevFilters,
        categoryId.toString(),
      ]);
    } else {
      setSelectedFilters((prevFilters) =>
        prevFilters.filter((id) => id !== categoryId.toString())
      );
    }
  };

  const renderCategoryContent = () => {
    if (selectedFilters.length > 0) {
      return categories
        .filter((cat) => selectedFilters.includes(cat.id.toString()))
        .map((filteredCat) => (
          <div key={filteredCat.id} className="mb-8 animate-fade-in">
            {filteredCat.component}
          </div>
        ));
    }

    return <ShCaFlowersEl/>
  };

  const menu = (
    <Menu onClick={handleSortChange}>
      {sortOptions.map((option) => (
        <Menu.Item key={option}>{option}</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Sidebar for large screens */}
      <div className="hidden md:block w-72 bg-white border-r shadow-md p-6">
        <div className="mb-6">
          {/* Sort Dropdown */}
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button className="flex items-center justify-between w-full bg-blue-500 text-white px-4 py-2 rounded-md">
              Sort by: {sortOption} <DownOutlined className="ml-2" />
            </Button>
          </Dropdown>
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Categories</h2>
          {categories.map((cat) => (
            <div key={cat.id} className="mb-3">
              <Checkbox
                onChange={(e) => handleCheckboxChange(cat.id, e.target.checked)}
                checked={selectedFilters.includes(cat.id.toString())}
              >
                {cat.name}
              </Checkbox>
            </div>
          ))}
        </div>
      </div>

      {/* Drawer for small screens */}
      <ShopDrawerEl
        visible={drawerVisible}
        onClose={() => setDrawerVisible(false)}
        categories={categories}
        selectedFilters={selectedFilters}
        onCategoryChange={setSelectedFilters}
      />

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        {/* Toggle Button for Drawer (Mobile View) */}
        <Button
          type="primary"
          icon={<FilterOutlined />}
          className="md:hidden mb-6 bg-blue-600 hover:bg-blue-700"
          onClick={() => setDrawerVisible(true)}
        >
          Filter
        </Button>

        {/* Render Category Content */}
        <div className="p-6 border rounded-lg bg-white shadow-lg transition-all duration-500">
          {renderCategoryContent()}
        </div>
      </div>
    </div>
  );
};

export default ShopPageLayoutEl;
