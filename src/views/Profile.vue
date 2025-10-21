<template>
    <div class="container lg:w-2/3 mx-auto p-5">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            <!-- Profile Details -->
            <div class="bg-white p-3 shadow rounded-lg md:col-span-2">

                <h2 class="text-xl font-semibold mb-2">Profile Details</h2>
                <div class="mb-3"><input type="text" name="" id="" placeholder="Your Name"
                        class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                </div>
                <div class="mb-3"><input type="text" name="" id="" placeholder="Your Email"
                        class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                </div>
                <div class="mb-3"><input type="text" name="" id="" placeholder="Your Phone"
                        class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                </div>

                <h2 class=" font-semibold mt-6 mb-2 text-xl ">Billing Address</h2>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <div><input type="text" name="" id="" placeholder="Address 1"
                            class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                    </div>
                    <div><input type="text" name="" id="" placeholder="Address 2"
                            class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <div><input type="text" name="" id="" placeholder="City"
                            class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                    </div>
                    <div><input type="text" name="" id="" placeholder="State"
                            class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <div>
                        <select class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded">
                            <option value="">Select Country</option>
                            <option value="ge">Georgia</option>
                            <option value="us">USA</option>
                            <option value="in">India</option>
                            <option value="de">Germany</option>
                        </select>
                    </div>
                    <div><input type="text" name="" id="" placeholder="ZipCode"
                            class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                    </div>
                </div>

                <div class="flex justify-between mt-6 mb-2">
                    <h2 class=" font-semibold text-xl">Shipping Address</h2>
                    <label for="sameAsBillingAddress" class="text-gray-700">
                        <input type="checkbox" id="sameAsBillingAddress"
                            class="text-purple-600 focus:ring-purple-600 mr-2" /> Same As Billing
                    </label>
                </div>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <div><input type="text" name="" id="" placeholder="Address 1"
                            class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                    </div>
                    <div><input type="text" name="" id="" placeholder="Address 2"
                            class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <div><input type="text" name="" id="" placeholder="City"
                            class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                    </div>
                    <div><input type="text" name="" id="" placeholder="State"
                            class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 mb-3">
                    <div>
                        <select class="w-full focus:border-purple-600 focus:ring-purple-600 border-gray-300 rounded">
                            <option value="">Select Country</option>
                            <option value="ge">Georgia</option>
                            <option value="us">USA</option>
                            <option value="in">India</option>
                            <option value="de">Germany</option>
                        </select>
                    </div>
                    <div><input type="text" name="" id="" placeholder="ZipCode"
                            class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                    </div>
                </div>

                <button class="btn-emerald w-full">Update</button>
            </div>
            <!-- Update Password -->
            <div class="bg-white p-3 shadow rounded-lg ">
                <h2 class="text-xl font-semibold mb-2">Update Password</h2>
                <div class="mb-3">
                    <input type="password" name="" id="" placeholder="Your Current Password"
                        class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                </div>
                <div class="mb-3">
                    <input type="password" name="" id="" placeholder="New Password"
                        class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                </div>
                <div class="mb-3">
                    <input type="password" name="" id="" placeholder="Repeat New Password"
                        class="bg-white w-full rounded border-gray-300 focus:border-purple-600 focus:ring-purple-600">
                </div>
                <button class="btn-emerald w-full md:w-auto">Update</button>
            </div>
        </div>
    </div>
</template>
<script setup></script>