import React, { useEffect } from "react";
import router from "next/router";
import PageHeader from "~/components/common/PageHeader";
import { deviceDetect } from "react-device-detect";
import { isDev } from "~/constants/env";

const DeviceInfo = () => {
  const deviceInfo = deviceDetect();
  const deviceInfoKeys = Object.keys(deviceInfo);
  return (
    <div className="py-6">
      <h2 className="text-xl">Device Information</h2>
      <div>
        <table>
          {deviceInfoKeys.map((key) => {
            return (
              <tr className="border">
                <td className="pr-4 border">
                  <p className="text-sm font-bold">{key}</p>
                </td>
                <td className="px-4">
                  <pre className="text-xs">
                    {typeof deviceInfo[key] === "boolean"
                      ? !!deviceInfo[key]
                        ? "true"
                        : "false"
                      : deviceInfo[key]}
                  </pre>
                </td>
              </tr>
            );
          })}
          <tr className="border">
            <td className="pr-4 border">
              <pre className="text-sm font-bold">NODE_ENV</pre>
            </td>
            <td className="px-4">
              <pre className="text-xs">{process.env.NODE_ENV}</pre>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const DevPage = () => {
  useEffect(() => {
    if (!isDev) {
      router.push("/");
    }
  });
  return (
    <div>
      <PageHeader headerText="Hidden Dev Page" />
      <p>
        This page is only visible in development mode. Use as a sandbox or put
        dev stuff here
      </p>
      <DeviceInfo />
    </div>
  );
};

export default DevPage;
