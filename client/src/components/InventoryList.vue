<template>
  <div class="q-pa-lg">

    <!-- Table -->
    <q-table
      v-model:selected="selected"
      flat bordered
      title="Inventory"
      :rows="rows"
      :columns="columns"
      row-key="name"
      selection="single"
      :pagination="initialPagination"
    >
      <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="add"
          label="Add"
          @click="addItemDialog = true"
        />
      </template>
    </q-table>

    <!-- Selected Item -->
    <div class="q-mt-lg">
      Selected: {{ JSON.stringify(selected) }}
    </div>

    <!-- Add Dialog -->
    <q-dialog v-model="addItemDialog" persistent>
      <q-card class="full-width">
        <q-card-section>
          <div class="text-h6">Add Item</div>
          <div class="text-subtitle2">Add new item into inventory.</div>
        </q-card-section>

        <q-card-section class="q-gutter-md column">
          <q-input outlined v-model="text" label="Name" stack-label dense />
          <q-input outlined v-model="text" label="SKU #" stack-label dense />
          <q-select outlined v-model="addCategory" label="Category" :options="categoryOptions" dense />
          <q-select outlined v-model="addSubcategory" label="Subcategory" :options="subcategoryOptions" dense />
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn flat label="Confirm" color="primary" v-close-popup />
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { ref } from 'vue'

const columns = [
  {
    name: 'name',
    label: 'Name',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'sku', align: 'left', label: 'SKU #', field: 'sku' },
  { name: 'quantityonhand', label: 'Quantity On Hand', field: 'quantityonhand', sortable: true },
  { name: 'category', label: 'Category', field: 'category' },
  { name: 'subcategory', label: 'Subcategory', field: 'subcategory' },
  { name: 'supplier', label: 'Supplier', field: 'supplier' },
  { name: 'status', label: 'Status', field: 'status', sortable: true },
];

const rows = [
  {
    name: 'Samsung 55" Smart TV',
    sku: 'SKU-1001',
    quantityonhand: 15,
    category: 'Electronics',
    subcategory: 'TVs',
    supplier: 'Tech World',
    status: 'active'
  },
  {
    name: 'Apple MacBook Pro 13"',
    sku: 'SKU-1002',
    quantityonhand: 10,
    category: 'Electronics',
    subcategory: 'Laptops',
    supplier: 'Gadgets Inc.',
    status: 'active'
  },
  {
    name: 'Sony PlayStation 5',
    sku: 'SKU-1003',
    quantityonhand: 20,
    category: 'Electronics',
    subcategory: 'Gaming Consoles',
    supplier: 'Game Zone',
    status: 'active'
  },
  {
    name: 'Bose QuietComfort 35 II',
    sku: 'SKU-1004',
    quantityonhand: 25,
    category: 'Electronics',
    subcategory: 'Headphones',
    supplier: 'Audio Hub',
    status: 'active'
  },
  {
    name: 'Canon EOS Rebel T7i',
    sku: 'SKU-1005',
    quantityonhand: 12,
    category: 'Electronics',
    subcategory: 'Cameras',
    supplier: 'Camera Co.',
    status: 'inactive'
  },
  {
    name: 'LG 27" 4K Gaming Monitor',
    sku: 'SKU-1006',
    quantityonhand: 8,
    category: 'Electronics',
    subcategory: 'Monitors',
    supplier: 'Tech World',
    status: 'active'
  },
  {
    name: 'Nintendo Switch Console',
    sku: 'SKU-1007',
    quantityonhand: 22,
    category: 'Electronics',
    subcategory: 'Gaming Consoles',
    supplier: 'Game Zone',
    status: 'active'
  },
];

export default {
  name: 'InventoryList',
  setup() {
    return {
      selected: ref([]),
      initialPagination: {
        rowsPerPage: 10
      },
      addItemDialog: ref(false),
      columns,
      rows,
      addCategory: ref(null),
      addSubcategory: ref(null),
      categoryOptions: [ 'Electronics' ],
      subcategoryOptions: [ 'TVs', 'Laptops', 'Gaming Consoles', 'Headphones', 'Cameras', 'Monitors' ]
    }
  }
}
</script>