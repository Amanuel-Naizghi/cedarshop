"use client";

import Link from "next/link";
import { ArrowLeft, Moon, Sun, Trees } from "lucide-react";
import { useTheme } from "@/components/themeProvider";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="appShell">
      <header className="siteHeader">
        <div className="headerInner">
          <Link className="brand brandLink" href="/">
            <span className="brandIcon">
              <Trees className="iconLarge" />
            </span>
            <span className="brandName">The Cedar Shop LMS</span>
          </Link>
          <Link className="button buttonSettings" href="/">
            <ArrowLeft className="iconSmall" />
            Back to home
          </Link>
        </div>
      </header>

      <main className="settingsMain">
        <div className="settingsHeading">
          <p className="eyebrow">Preferences</p>
          <h1>Settings</h1>
          <p className="settingsIntro">Customize how Cedar Shop looks on this device.</p>
        </div>

        <section className="settingsPanel" aria-labelledby="appearance-heading">
          <div className="settingsCopy">
            <div className="settingsIcon" aria-hidden="true">
              {isDark ? <Moon className="iconMedium" /> : <Sun className="iconMedium" />}
            </div>
            <div>
              <h2 id="appearance-heading">Appearance</h2>
              <p>Choose a light or dark theme for the application.</p>
            </div>
          </div>

          <button
            type="button"
            className={`themeSwitch${isDark ? " themeSwitchOn" : ""}`}
            role="switch"
            aria-checked={isDark}
            aria-label="Dark mode"
            onClick={toggleTheme}
          >
            <span className="themeSwitchThumb" />
          </button>
        </section>

        <p className="themeStatus" aria-live="polite">
          Dark mode is {isDark ? "on" : "off"}.
        </p>
      </main>
    </div>
  );
}
