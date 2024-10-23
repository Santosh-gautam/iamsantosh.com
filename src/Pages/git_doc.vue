<template>
  <div class="max-w-3xl mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-6">Git Configuration Documentation</h1>
    <p class="mb-4">This documentation will guide you through managing Git configurations, including adding, removing, updating user credentials, and understanding how Git Bash picks the system username.</p>

    <h2 class="text-2xl font-semibold mt-6 mb-4">1. Adding Git Configuration</h2>
    <p class="mb-4">
      Before you start using Git, it's important to set your name and email address. Git uses this information to track who makes changes to repositories.
    </p>
    <h3 class="text-xl font-semibold mt-4 mb-2">Steps to Add Git User Configuration:</h3>
    <h4 class="font-semibold">To Set Global User Name and Email:</h4>
    <pre class="bg-gray-100 p-4 rounded-md my-2">
      <code class="text-sm">
        <span class="text-blue-600"># Open Git Bash</span>
        <br />
        git config --global user.name "Your Name"
        <br />
        git config --global user.email "your.email@example.com"
        <br />
        git config --global --list
      </code>
    </pre>

    <h4 class="font-semibold">To Set Local User Name and Email (for a specific repository):</h4>
    <pre class="bg-gray-100 p-4 rounded-md my-2">
      <code class="text-sm">
        <span class="text-blue-600"># Navigate to your repository folder</span>
        <br />
        git config user.name "Your Name"
        <br />
        git config user.email "your.email@example.com"
        <br />
        git config --list
      </code>
    </pre>

    <h2 class="text-2xl font-semibold mt-6 mb-4">2. Removing Git Configuration</h2>
    <p class="mb-4">
      If you want to remove the Git configuration (like user name and email), follow the steps below:
    </p>
    <h3 class="font-semibold">To Remove Global Git Config:</h3>
    <pre class="bg-gray-100 p-4 rounded-md my-2">
      <code class="text-sm">
        <span class="text-blue-600"># Open Git Bash</span>
        <br />
        git config --global --unset user.name
        <br />
        git config --global --unset user.email
        <br />
        git config --global --list
      </code>
    </pre>

    <h3 class="font-semibold">To Remove Local Git Config:</h3>
    <pre class="bg-gray-100 p-4 rounded-md my-2">
      <code class="text-sm">
        <span class="text-blue-600"># Navigate to your repository folder</span>
        <br />
        git config --unset user.name
        <br />
        git config --unset user.email
      </code>
    </pre>

    <h2 class="text-2xl font-semibold mt-6 mb-4">3. Updating Existing Git Configuration</h2>
    <p class="mb-4">
      If you've already added Git configuration but need to update it, follow these steps:
    </p>
    <h3 class="font-semibold">To Update Global Git Config:</h3>
    <pre class="bg-gray-100 p-4 rounded-md my-2">
      <code class="text-sm">
        <span class="text-blue-600"># Open Git Bash</span>
        <br />
        git config --global user.name "New Name"
        <br />
        git config --global user.email "new.email@example.com"
        <br />
        git config --global --list
      </code>
    </pre>

    <h3 class="font-semibold">To Update Local Git Config:</h3>
    <pre class="bg-gray-100 p-4 rounded-md my-2">
      <code class="text-sm">
        <span class="text-blue-600"># Navigate to your repository folder</span>
        <br />
        git config user.name "New Name"
        <br />
        git config user.email "new.email@example.com"
        <br />
        git config --list
      </code>
    </pre>

    <h2 class="text-2xl font-semibold mt-6 mb-4">4. Clearing Cached Credentials</h2>
    <p class="mb-4">
      If Git is using incorrect credentials (such as another user's account), you can clear the cached credentials using the Windows Credential Manager.
    </p>
    <h3 class="font-semibold">Steps to Clear Cached Git Credentials on Windows:</h3>
    <ol class="list-decimal list-inside mb-4">
      <li>Open <strong>Control Panel</strong>.</li>
      <li>Go to <strong>Credential Manager</strong>.</li>
      <li>Select <strong>Windows Credentials</strong>.</li>
      <li>Look for entries related to <strong>Git</strong> or <strong>GitHub</strong> (usually listed as <code>git:https://github.com</code>).</li>
      <li>Remove those credentials.</li>
      <li>Next time you push to a repository, Git will prompt you to enter the correct credentials.</li>
    </ol>

    <h2 class="text-2xl font-semibold mt-6 mb-4">5. Git Bash and System Username</h2>
    <p class="mb-4">
      Git Bash may display the username in the terminal prompt that comes from your <strong>Windows system username</strong> or <strong>computer name</strong>.
    </p>
    <h3 class="font-semibold">How to Check and Update the System Username in Windows:</h3>
    <ol class="list-decimal list-inside mb-4">
      <li>Open <strong>Control Panel</strong>.</li>
      <li>Go to <strong>System</strong>.</li>
      <li>Click on <strong>Advanced System Settings</strong>.</li>
      <li>Under the <strong>Computer Name</strong> tab, you will see the current computer name.</li>
      <li>If the computer name is set to a previous user’s name, you can change it by clicking <strong>Change</strong> and updating it.</li>
      <li>Restart <strong>Git Bash</strong> to see the new prompt with the updated computer name.</li>
    </ol>

    <h3 class="font-semibold">To Change the Username for Git Bash Prompt:</h3>
    <ol class="list-decimal list-inside mb-4">
      <li>Open <strong>Git Bash</strong> and run:
        <pre class="bg-gray-100 p-4 rounded-md my-2">
          <code class="text-sm">
            nano ~/.bashrc
          </code>
        </pre>
      </li>
      <li>Add the following line to set a custom prompt (replace "Your Name" with your desired name):
        <pre class="bg-gray-100 p-4 rounded-md my-2">
          <code class="text-sm">
            PS1="Your Name@\h \W\$ "
          </code>
        </pre>
      </li>
      <li>Save the file and exit (Ctrl + O to save, Ctrl + X to exit).</li>
      <li>Apply the changes:
        <pre class="bg-gray-100 p-4 rounded-md my-2">
          <code class="text-sm">
            source ~/.bashrc
          </code>
        </pre>
      </li>
    </ol>

    <h2 class="text-2xl font-semibold mt-6 mb-4">Summary</h2>
    <ul class="list-disc list-inside mb-4">
      <li><strong>Add Git Config</strong>: Use <code>git config --global</code> to set name and email.</li>
      <li><strong>Remove Git Config</strong>: Use <code>git config --unset</code> to remove user credentials.</li>
      <li><strong>Update Git Config</strong>: Use <code>git config</code> again with new details to update.</li>
      <li><strong>Control Panel</strong>: Check <strong>Control Panel → Credential Manager → Windows Credentials</strong> to update or clear saved credentials.</li>
    </ul>
  </div>
</template>

<script>
export default {
name: 'GitConfigDocumentation',
}
</script>

<style scoped>
/* You can add any additional styling here */
</style>
