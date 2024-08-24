
# Omni-Channel Customer Support Platform

## Overview

The Omni-Channel Customer Support Platform is a unified system designed to enhance customer support across various communication channels. This project includes a Salesforce Lightning Web Component (LWC) for managing support cases, integrates with multiple communication channels, and uses Power BI for advanced analytics and reporting.

## Key Features

- **Unified Customer Experience**: Integration with email, chat, and social media platforms.
- **Case Management**: Create and manage support cases through a Salesforce Lightning Web Component.
- **Case Routing Automation**: Automated routing rules to reduce case resolution time by 25% and increase first-contact resolution by 20%.
- **Power BI Integration**: Export case data to CSV and import it into Power BI for comprehensive analysis.

## Technologies Used

- **Languages**: JavaScript, Apex, SQL
- **Cloud Services**: Salesforce
- **Tools**: Salesforce Lightning Web Component (LWC), Power BI
- **Integration**: Email, Chat, Social Media

## Project Structure

- **`CaseManagement.html`**: LWC template for the case management interface.
- **`CaseManagement.js`**: LWC JavaScript controller for handling case creation.
- **`CaseManagement.js-meta.xml`**: Metadata configuration for the LWC component.
- **`CaseManagementController.cls`**: Apex controller for case management operations.
- **`ExportData.cls`**: Apex class for exporting case data to CSV format.
- **`README.md`**: Documentation for the project.
- **`sample_data.csv`**: Mock data used for testing and validation.

## Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/devisubadra/Omni-Channel-Customer-Support-Platform-.git
   cd omni-channel-customer-support
   ```

2. **Deploy Salesforce Components**:
   - Deploy `CaseManagementController.cls` and `ExportData.cls` using Salesforce Developer Console or Salesforce CLI.
   - Deploy `CaseManagement.html`, `CaseManagement.js`, and `CaseManagement.js-meta.xml` as a Lightning Web Component.

3. **Configure Power BI Integration**:
   - Use the `ExportData` class to export case data to CSV.
   - Import the CSV file into Power BI and set up visualizations.

## Architecture

The architecture is designed to provide a seamless customer support experience with integrated communication channels and analytics. The key components include:

- **Salesforce Platform**: Core system for managing support cases and automating routing.
  - **LWC (`CaseManagement`)**: Interface for creating and managing cases.
  - **Apex Controllers**: Backend logic for handling case operations.
  - **Omni-Channel Routing**: Configured to automate case assignment.

- **Communication Channels**:
  - **Email**: Integrated with Salesforce to manage support requests.
  - **Chat**: Real-time chat service integrated with Salesforce.
  - **Social Media**: Integration to capture support requests from social media platforms.

- **Power BI**:
  - **Data Export**: Export case data using `ExportData` class.
  - **Data Import and Visualization**: Import CSV data into Power BI for reporting.

**Architecture Diagram**: 
![image](https://github.com/user-attachments/assets/aa46eb21-b036-4362-909c-32e24be5c329)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

