**Use Case: Viewing Discovered Assets**

**Use Case Description**:

The Viewing Discovered Assets use case outlines the process for users to check all discovered assets in the system, including the count of tagged and orphaned assets. Users navigate to the "Asset" menu and select "Discovered Asset" submenu, where a list of all assets is displayed. The assets are categorized by service provider, such as AWS, GCP, and Azure. Users can switch between different tabs to view all assets, tagged assets, and orphaned assets.

**Actors**:

User: Initiates interactions to explore discovered assets.

**Triggers**:

User logs into the system.

User selects the "Asset" menu.

User navigates to the "Discovered Asset" submenu.

**Preconditions**:

User has access to the system.

Discovered assets are available in the system.

**Postconditions**:

User has successfully viewed the list of all discovered assets, including tagged and orphaned assets.

Detailed information about assets from different service providers is accessible.

**Normal Flow**:

**User navigates to the "Asset" menu**:

Logs into the system.

Accesses the "Asset" menu from the navigation.

**User selects "Discovered Asset" submenu**:

Navigates to the "Discovered Asset" submenu under the "Asset" menu.

**System displays the list of all discovered assets**:

Presents a list of all discovered assets, categorized by service providers (AWS, GCP, Azure).

**User navigates through different tabs**:

**Tabs on top allow the user to switch between**:

**All Assets**: Displays a list of all discovered assets.

**Tagged Assets**: Displays a list of assets that have been tagged.

**Orphaned Assets**: Displays a list of assets that are not tagged (orphans).

**User clicks on a specific service provider card**:

Clicks on a card representing a service provider (AWS, GCP, Azure).

**System displays assets from the selected service provider**:

A list of assets from the selected service provider is displayed below the card.

**Alternative Flows**:

**No Discovered Assets Found**:

If there are no discovered assets in the system, the system informs the user and suggests checking the data sources.

**Navigation Issues**:

If there are issues navigating to the "Discovered Asset" submenu or switching between tabs, the system notifies the user and provides guidance on resolving the problem.

**No Tagged or Orphaned Assets**:

If there are no tagged or orphaned assets, the system notifies the user that no details are available.

**Exceptions**:

If at any point the user encounters an error or wishes to return to the main menu, they can do so, and the system reverts to the previous state.



