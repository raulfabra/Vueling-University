﻿using OpenQA.Selenium.Remote;

namespace Proyecto.Auto.Template.SetUp
{
    public interface ISetUpWebDriver
    {
        RemoteWebDriver GetSetUpWebDriver();

        void CloseWebDriver();

        void GoTo(string url);

        bool HasQuit(RemoteWebDriver webDriver);
    }
}
