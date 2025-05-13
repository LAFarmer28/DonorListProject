import { DonorShortModel } from "./types";

export const fetchDonorData = async (): Promise<{ data: DonorShortModel[]; totalCount: number }> => {
  console.log("Fetching donor data (local mock)");

  // Example mock data
  const mockData: DonorShortModel[] = [
    {
      DonorId: 1,
      Name: "John Doe",
      City: "New York",
      ChurchNumber: 123,
      AddressCountryCode: "US",
      StateCode: "NY",
      StateOfficeNumber: 1,
      DonorStatusName: "Active"
    },
    {
      DonorId: 2,
      Name: "Jane Smith",
      City: "Los Angeles",
      ChurchNumber: 456,
      AddressCountryCode: "US",
      StateCode: "CA",
      StateOfficeNumber: 2,
      DonorStatusName: "Inactive"
    }
  ];

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: mockData,
        totalCount: mockData.length
      });
    }, 500); // Simulate API delay
  });
};
