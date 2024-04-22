"use client";

import Link from "next/link";

function Page() {
  return (
    <div>
      <div>
        <link rel="stylesheet" href="https://cdn.formbold.com/formbold.css" />
        <br />
        <div className="formbold-builder-form themeOne">
          <form
            action="https://formbold.com/s/6rmyA"
            method="POST"
            className="mx-auto w-full max-w-[570px] rounded-[10px] border border-stroke bg-white p-10 themeOne"
          >
            <div className="SortableItem fb-builder-item">
              <h3 className="static text-xl font-semibold leading-tight text-black sm:text-[28px]">
                Register Manual Ilmoore
              </h3>
            </div>
            <div className="SortableItem fb-builder-item">
              <div className="mb-4">
                <label className="mb-2.5 block text-base text-black">
                  <span>FullName</span>
                  <span className="label-required pl-1 text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                  name="fullName"
                  placeholder="FullName"
                  required
                />
              </div>
            </div>
            <div className="SortableItem fb-builder-item">
              <div className="mb-4">
                <label className="mb-2.5 block text-base text-black">
                  <span>Email</span>
                </label>
                <input
                  type="email"
                  className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                  name="email"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div className="SortableItem fb-builder-item">
              <div className="mb-4">
                <label className="mb-2.5 block text-base text-black">
                  <span>School Level</span>
                  <span className="label-required pl-1 text-red-400">*</span>
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                  name="schoolLevel"
                  placeholder="School Level"
                  required
                />
              </div>
            </div>
            <div className="SortableItem fb-builder-item">
              <div className="mb-4">
                <label className="mb-2.5 block text-base text-black">
                  <span>Phone Number</span>
                  <span className="label-required pl-1 text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full rounded border border-stroke bg-white px-5 py-3 text-base text-black outline-none focus:border-primary"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  required
                />
              </div>
            </div>
            <div className="btn-toolbar flex items-center space-x-3">
              <input
                type="submit"
                className="inline-flex cursor-pointer items-center justify-center rounded border border-primary bg-primary px-8 py-2 text-base font-medium text-white hover:bg-opacity-90"
              />
            </div>
            <div>
              <Link href="/manual-payment">
                <div className="inline-flex mt-5 cursor-pointer items-center justify-center rounded border bg-teal-500 px-8 py-2 text-base font-medium text-white hover:bg-opacity-90">
                  Manual Payment
                </div>
              </Link>
              <a
                className="flex mt-5 cursor-pointer items-center justify-center rounded border border-primary bg-primary px-8 py-2 text-base font-medium text-white hover:bg-opacity-90"
                href="/"
              >
                RELOAD HERE
              </a>
            </div>
            <h1 className="text-red-600 text-lg text-center mt-5 font-bold">
              * Please Reload the page after submit
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
