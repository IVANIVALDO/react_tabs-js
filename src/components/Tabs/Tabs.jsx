import React from 'react';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  return (
    <div>
      <ul className="tabs">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              type="button"
              className="tab"
              onClick={() => onTabSelected(tab)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>

      <div data-cy="TabContent">{activeTab.content}</div>
    </div>
  );
};
