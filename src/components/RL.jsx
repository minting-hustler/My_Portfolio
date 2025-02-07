import React from 'react';

function RL() {
  return (
    <div className="max-w-3xl mx-auto p-6 font-serif text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Implementation of a Practical Reinforcement Learning-Based Controller Design (IITJ)</h1>
      <p className="text-lg mb-2">August 2024 – Present</p>
      <p className="text-lg mb-6 font-semibold">Supervisor: Dr. Santosh Kumar Varansi</p>
      
      <p className="mb-4">
        Modern industrial control systems rely heavily on robust controllers to regulate complex dynamic systems. Traditional approaches like Model Predictive Control (MPC) have been widely used due to their ability to optimize control actions while considering system constraints. However, these methods often require accurate system models and computationally expensive online optimization. To overcome these challenges, we developed a reinforcement learning (RL)-based process control system, leveraging deep learning to enhance adaptability and efficiency.
      </p>
      
      <h2 className="text-2xl font-bold mt-6 mb-3">Project Overview and Motivation</h2>
      <p className="mb-4">
        The goal of this project was to design an RL-based controller that learns optimal control actions for a dynamic system while ensuring stability and robustness. Given the challenges posed by direct reinforcement learning in real-world scenarios—such as sample inefficiency, unstable learning, and overestimation—we first pretrained our agent using Model Predictive Control (MPC). This hybrid approach enabled the RL agent to mimic expert MPC actions before transitioning into an independent learning phase, where it fine-tuned its control strategy based on real-time feedback.
      </p>
      
      <h2 className="text-2xl font-bold mt-6 mb-3">Key Methodologies Implemented</h2>
      <h3 className="text-xl font-semibold mt-4">1. Pretraining with Model Predictive Control (MPC)</h3>
      <p className="mb-4">
        MPC serves as an optimal controller that makes control decisions by solving an optimization problem over a receding time horizon. While MPC is robust and provides high-quality control actions, it has limitations:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li><span className="font-semibold">Computational Complexity:</span> Solving an optimization problem at every time step is expensive.</li>
        <li><span className="font-semibold">Dependence on System Models:</span> MPC requires an accurate mathematical representation of the system dynamics.</li>
      </ul>
      <p className="mb-4">
        To address these issues, we used MPC to generate optimal trajectories, which were then used to train a reinforcement learning agent via supervised imitation learning. This allowed the RL model to learn control strategies without requiring extensive interaction with the actual system initially.
      </p>
      
      <h3 className="text-xl font-semibold mt-4">2. Implementation of Twin-Delayed Deep Deterministic Policy Gradient (TD3)</h3>
      <p className="mb-4">
        Once the RL agent had acquired a basic understanding of control actions from MPC, we fine-tuned it using an off-policy actor-critic reinforcement learning algorithm—TD3. TD3 is particularly well-suited for control tasks in continuous action spaces due to the following advantages:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li><span className="font-semibold">Twin Critic Networks:</span> TD3 mitigates overestimation bias by maintaining two separate critic networks and using the minimum of their value estimates.</li>
        <li><span className="font-semibold">Delayed Policy Updates:</span> The actor network is updated less frequently than the critic networks, reducing the risk of diverging policies.</li>
        <li><span className="font-semibold">Target Policy Smoothing:</span> Adds small Gaussian noise to target actions, preventing overfitting.</li>
      </ul>
      
      <h3 className="text-xl font-semibold mt-4">3. Exploration Noise and Experience Replay for Stability</h3>
      <p className="mb-4">
        To ensure efficient exploration in the continuous action space, we introduced:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li><span className="font-semibold">Ornstein-Uhlenbeck Noise:</span> Encourages temporally correlated exploration.</li>
        <li><span className="font-semibold">Gaussian Noise:</span> Prevents premature convergence to suboptimal policies by injecting randomness.</li>
      </ul>
      <p className="mb-4">
        We also leveraged experience replay, where past interactions were stored and randomly sampled to break correlation between consecutive training samples, significantly improving sample efficiency.
      </p>
      
      <h2 className="text-2xl font-bold mt-6 mb-3">Project Outcomes and Achievements</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><span className="font-semibold">Improved System Performance:</span> The RL-based controller successfully outperformed the baseline MPC.</li>
        <li><span className="font-semibold">Robustness to System Variations:</span> Adapted to unmodeled system variations and disturbances.</li>
        <li><span className="font-semibold">Reduced Computational Overhead:</span> The trained RL policy executed control actions in milliseconds.</li>
      </ul>
      
      <h2 className="text-2xl font-bold mt-6 mb-3">Conclusion and Future Work</h2>
      <p className="mb-4">
        This project demonstrated the feasibility of combining reinforcement learning with MPC for optimal process control. By leveraging MPC as a pretraining step and employing TD3 for fine-tuned learning, we designed a controller that is both data-efficient and adaptable.
      </p>
      <p className="mb-4">
        For future improvements, we aim to:
      </p>
      <ul className="list-disc ml-6 mb-4">
        <li>Extend the model to handle multi-agent control scenarios.</li>
        <li>Integrate model-based RL techniques to reduce sample complexity.</li>
        <li>Test the framework on real-world industrial systems.</li>
      </ul>
      <p className="mb-6">
        This project lays the foundation for intelligent adaptive control systems that can operate efficiently in dynamic, real-world environments while overcoming the limitations of traditional control methodologies.
      </p>
    </div>
  );
}

export default RL;