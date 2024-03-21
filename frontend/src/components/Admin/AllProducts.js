import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { AiOutlineDelete, AiOutlineEdit, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

import axios from "axios";
import { server } from "../../server";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateProduct } from "../../redux/actions/product";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { products, error } = useSelector((state) => state.products); // Added error state
  const [name, setName] = useState(products ? products.name : "");
  const [stock, setStock] = useState(products ? products.stock : "");
  const [discountPrice, setDiscountPrice] = useState(
    products ? products.discountPrice : ""
  );

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
    window.location.reload();
  };

  const handleOpen = (product) => {
    setSelectedProduct(product);
    setName(product.name);
    setStock(product.Stock);
    setDiscountPrice(product.price);
    setOpen(true);

    console.log(product);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateProduct(name, stock, discountPrice, selectedProduct.id)); // Dispatch the action with the correct arguments
  };

  useEffect(() => {
    axios
      .get(`${server}/product/admin-all-products`, { withCredentials: true })
      .then((res) => {
        setData(res.data.products);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 80,
      flex: 0.5,
    },

    {
      field: "sold",
      headerName: "Total Sales",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 100,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
            {/* <Button onClick={() => handleOpen(params.row)}>
              <AiOutlineEdit size={20} />
            </Button> */}
          </>
        );
      },
    },
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Button onClick={() => handleDelete(params.id)}>
            <AiOutlineDelete size={20} />
          </Button>
        );
      },
    },
  ];

  const row = [];

  data &&
    data.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        price: "PHP " + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
      <div className="w-full mx-8 pt-1 mt-10 bg-white">
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>

      {/* Dialog for updating product */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Product</DialogTitle>
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Add form element and onSubmit event */}
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Stock"
              fullWidth
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <TextField
              margin="dense"
              label="Discount Price"
              fullWidth
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Update</Button>{" "}
            {/* Use type="submit" for the Update button */}
          </DialogActions>
        </form>
      </Dialog>

      {/* Error handling */}
      <Dialog open={!!error} onClose={() => dispatch({ type: "clearErrors" })}>
        <DialogTitle>Error</DialogTitle>
        <DialogContent>{error}</DialogContent>
        <DialogActions>
          <Button onClick={() => dispatch({ type: "clearErrors" })}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AllProducts;
