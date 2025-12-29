module Jekyll
  class GitCommitGenerator < Generator
    priority :highest
    def generate(site)
      # Get the current short hash (7 characters)
      commit_hash = `git rev-parse --short HEAD`.strip
      site.config['commit_hash'] = commit_hash
    end
  end
end
